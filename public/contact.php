<?php
// Contact form handler for the static site (Hostinger shared hosting runs PHP).
// Receives the enquiry form POST from /contact/ and emails it to the sales inbox.

const RECIPIENT = 'info@megamoveindia.com';
const MIN_SECONDS_ON_PAGE = 3;

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $status, bool $ok, string $message): void
{
    http_response_code($status);
    echo json_encode(['ok' => $ok, 'message' => $message]);
    exit;
}

// Header values must not carry line breaks (prevents mail header injection).
function single_line(string $value, int $max): string
{
    $value = trim(preg_replace('/[\r\n\t]+/', ' ', $value));
    return mb_substr($value, 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'Method not allowed.');
}

// Spam checks: hidden honeypot field must stay empty, and real people take a
// few seconds to fill the form. Pretend success so bots get no signal.
$startedAt = (int) ($_POST['started_at'] ?? 0);
if (!empty($_POST['website']) || ($startedAt > 0 && time() - intdiv($startedAt, 1000) < MIN_SECONDS_ON_PAGE)) {
    respond(200, true, 'Thank you. Your enquiry has been sent.');
}

$name = single_line((string) ($_POST['name'] ?? ''), 100);
$phone = single_line((string) ($_POST['phone'] ?? ''), 30);
$email = single_line((string) ($_POST['email'] ?? ''), 150);
$company = single_line((string) ($_POST['company'] ?? ''), 150);
$remarks = trim(mb_substr((string) ($_POST['remarks'] ?? ''), 0, 5000));

if ($name === '' || $phone === '' || $email === '' || $remarks === '') {
    respond(422, false, 'Please fill in all required fields.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, false, 'Please enter a valid email address.');
}
if (!preg_match('/^[0-9+()\-\s]{7,30}$/', $phone)) {
    respond(422, false, 'Please enter a valid phone number.');
}

$host = preg_replace(['/:\d+$/', '/^www\./'], '', strtolower($_SERVER['HTTP_HOST'] ?? 'megamoveindia.com'));
$host = preg_replace('/[^a-z0-9.\-]/', '', $host);

$subject = 'Website enquiry from ' . $name . ($company !== '' ? ' (' . $company . ')' : '');
$body = "New enquiry from the website contact form\n\n"
    . "Name:    $name\n"
    . "Company: " . ($company !== '' ? $company : '-') . "\n"
    . "Email:   $email\n"
    . "Phone:   $phone\n\n"
    . "Remarks:\n$remarks\n\n"
    . "--\nSent from https://$host/contact/ on " . date('d M Y, H:i') . " (server time)\n";

$headers = [
    'From: Mega Move India Website <no-reply@' . $host . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail(
    RECIPIENT,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    implode("\r\n", $headers)
);

if (!$sent) {
    respond(500, false, 'Sorry, your enquiry could not be sent. Please email ' . RECIPIENT . ' directly.');
}

respond(200, true, 'Thank you. Your enquiry has been sent. Our team will get back to you shortly.');
