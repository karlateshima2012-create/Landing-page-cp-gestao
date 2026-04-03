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

$url = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" . $apiKey;

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['contents' => $contents]));

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    echo json_encode(['error' => curl_error($ch)]);
} else {
    $data = json_decode($response, true);
    if (isset($data['error'])) {
        echo json_encode(['text' => 'Erro do Google: ' . ($data['error']['message'] ?? 'Erro desconhecido')]);
    } else {
        $text = $data['candidates'][0]['content']['parts'][0]['text'] ?? 'Desculpe, não consegui gerar uma resposta agora.';
        echo json_encode(['text' => $text]);
    }
}

curl_close($ch);
