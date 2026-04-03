<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Chave da API (será injetada pelo deploy ou lida do sistema)
$apiKey = 'GEMINI_API_KEY_PLACEHOLDER';

$input = json_decode(file_get_contents('php://input'), true);
$message = $input['message'] ?? '';
$history = $input['history'] ?? [];

if (empty($message)) {
    echo json_encode(['error' => 'No message provided']);
    exit;
}

// Convert history to Gemini format
$contents = [];
// Initial system prompt
$contents[] = [
    'role' => 'user',
    'parts' => [['text' => $input['systemPrompt']]]
];
$contents[] = [
    'role' => 'model',
    'parts' => [['text' => 'Entendido.']]
];

foreach ($history as $msg) {
    $contents[] = [
        'role' => $msg['role'] === 'bot' ? 'model' : 'user',
        'parts' => [['text' => $msg['text']]]
    ];
}
$contents[] = [
    'role' => 'user',
    'parts' => [['text' => $message]]
];

$apiKey = 'GEMINI_API_KEY_PLACEHOLDER';

// Lista de modelos para tentar (alguns servidores exigem nomes diferentes)
$models = ['gemini-1.5-flash-latest', 'gemini-1.5-flash', 'gemini-pro'];
$responseText = '';
$success = false;

foreach ($models as $modelName) {
    if ($success) break;

    $url = "https://generativelanguage.googleapis.com/v1beta/models/" . $modelName . ":generateContent?key=" . $apiKey;

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['contents' => $contents]));

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    if (!curl_errno($ch) && $httpCode === 200) {
        $data = json_decode($response, true);
        $responseText = $data['candidates'][0]['content']['parts'][0]['text'] ?? '';
        if (!empty($responseText)) {
            $success = true;
        }
    }
    curl_close($ch);
}

if ($success) {
    echo json_encode(['text' => $responseText]);
} else {
    // Se todos falharem, mostre o erro do último para diagnóstico
    $errorData = json_decode($response, true);
    $msg = $errorData['error']['message'] ?? 'Erro de conexão com Google';
    if ($apiKey === 'GEMINI_API_KEY_PLACEHOLDER') {
        $msg = 'Configuração da chave pendente no servidor.';
    }
    echo json_encode(['text' => 'Erro do Google (' . $modelName . '): ' . $msg]);
}
