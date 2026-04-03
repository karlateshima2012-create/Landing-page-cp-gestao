<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Chave da API - Injetada pela Action
$apiKey = 'AIzaSyBdZ4Z436BTCuijPIFGW3dUs08MlvWe1bs';

if ($apiKey === 'GEMINI_API_KEY_PLACEHOLDER' || empty($apiKey)) {
    echo json_encode(['text' => 'Erro: Chave de API não configurada no servidor (v194).']);
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

// TENTATIVA SEQUENCIAL DE MODELOS E VERSÕES
$endpoints = [
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=$apiKey",
    "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=$apiKey",
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=$apiKey"
];

$finalText = '';
$lastError = '';

foreach ($endpoints as $url) {
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
        if (!empty($finalText)) break;
    } else {
        $data = json_decode($response, true);
        $lastError = "Erro $httpCode: " . ($data['error']['message'] ?? 'Falha desconhecida');
    }
}

if (!empty($finalText)) {
    echo json_encode(['text' => $finalText]);
} else {
    echo json_encode(['text' => "Falha na conexão de inteligência. Por favor, tente novamente. Detalhe: $lastError"]);
}
