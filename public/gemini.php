<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Chave da API - Injetada pela Action
$apiKey = 'AIzaSyDul0dBCqaTyfk2fLQi7MFnKuJfScBWDGU';

if ($apiKey === 'GEMINI_API_KEY_PLACEHOLDER' || empty($apiKey)) {
    echo json_encode(['text' => 'Erro: Chave de API não configurada no servidor (v200).']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$message = $input['message'] ?? '';
$history = $input['history'] ?? [];
$systemPrompt = $input['systemPrompt'] ?? '';

if (empty($message)) {
    echo json_encode(['text' => 'Por favor, digite uma mensagem.']);
    exit;
}

// Injetar instrução master na primeira interação
$systemMessage = "INSTRUÇÃO MASTER: " . $systemPrompt . "\n\nResponda agora ao usuário seguindo estas diretrizes.";

// Formatar histórico para o padrão Gemini (estritamente alternado: user, model, user...)
$formattedContents = [];

// Adicionar instrução como primeira mensagem do usuário se o histórico estiver vazio
if (empty($history)) {
    $formattedContents[] = [
        'role' => 'user',
        'parts' => [['text' => $systemMessage . "\n\nMensagem do usuário: " . $message]]
    ];
} else {
    // Se houver histórico, injetamos a instrução na primeira mensagem dele
    $first = true;
    foreach ($history as $msg) {
        if (empty($msg['text'])) continue;
        $role = ($msg['role'] === 'bot' || $msg['role'] === 'model') ? 'model' : 'user';
        
        $text = $msg['text'];
        if ($first && $role === 'user') {
            $text = $systemMessage . "\n\nHistórico anterior:\n" . $text;
            $first = false;
        }

        $lastIdx = count($formattedContents) - 1;
        if ($lastIdx >= 0 && $formattedContents[$lastIdx]['role'] === $role) {
            $formattedContents[$lastIdx]['parts'][0]['text'] .= "\n" . $text;
        } else {
            $formattedContents[] = [
                'role' => $role,
                'parts' => [['text' => $text]]
            ];
        }
    }
    
    // Adicionar a mensagem atual
    $lastIdx = count($formattedContents) - 1;
    if ($formattedContents[$lastIdx]['role'] === 'user') {
        $formattedContents[$lastIdx]['parts'][0]['text'] .= "\n\nMensagem atual: " . $message;
    } else {
        $formattedContents[] = [
            'role' => 'user',
            'parts' => [['text' => $message]]
        ];
    }
}

// Montar Payload Oficial para Gemini v1
$payload = [
    'contents' => $formattedContents,
    'generationConfig' => [
        'temperature' => 0.7,
        'maxOutputTokens' => 800
    ]
];

$finalText = '';
$lastError = '';

// TENTATIVA 1: Mapeamento de Modelos Disponíveis para esta Chave
$listUrl = "https://generativelanguage.googleapis.com/v1beta/models?key=$apiKey";
$ch = curl_init($listUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$listResponse = curl_exec($ch);
$listData = json_decode($listResponse, true);
curl_close($ch);

$availableModels = [];
if (isset($listData['models'])) {
    foreach ($listData['models'] as $m) {
        $availableModels[] = str_replace('models/', '', $m['name']);
    }
}

// Ordem de preferência
$preferredModels = ['gemini-1.5-flash-latest', 'gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-pro', 'gemini-1.0-pro'];
$modelsToTry = array_unique(array_merge(array_intersect($preferredModels, $availableModels), $preferredModels));

foreach ($modelsToTry as $modelName) {
    if (!empty($finalText)) break;

    $url = "https://generativelanguage.googleapis.com/v1beta/models/" . $modelName . ":generateContent?key=" . $apiKey;

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 200) {
        $data = json_decode($response, true);
        $finalText = $data['candidates'][0]['content']['parts'][0]['text'] ?? '';
    } else {
        $errData = json_decode($response, true);
        $lastError = "($modelName) " . ($errData['error']['message'] ?? 'Erro desconhecido');
    }
}

if (!empty($finalText)) {
    echo json_encode(['text' => $finalText]);
} else {
    $modelsFound = !empty($availableModels) ? implode(', ', $availableModels) : 'Nenhum';
    echo json_encode(['text' => "Google recusou a conexão. Verifique se a 'Generative Language API' está ATIVADA no seu Google AI Studio. Modelos detectados na sua conta: $modelsFound. Último Erro: $lastError"]);
}
