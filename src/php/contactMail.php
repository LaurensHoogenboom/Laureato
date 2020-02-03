<?php
if ($_POST) {
    $from = $_POST['email'];
    $name = $_POST['name'];
    $to = "info@laureato.nl";
    $subject = "Laureato Contactformulier";
    $plainMessage = $_POST['message'];

    $message = '<html><body><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="100%" align="center"><table width="700" border="0" align="center" cellpadding="0" cellspacing="0"><tr><td width="600" align="center"><table style="width: 100%; "><thead><tr>';
    $message .= '<td colspan="2" style="padding: 20px; background-color: rgb(38, 128, 235); font-family: sans-serif; color: rgb(255,255,255); border-radius: 4px 4px 0px 0px; "><h1 style="padding: 0; margin: 0; font-weight: normal; text-align: center;">';
    $message .= 'Contact Mail';
    $message .= '</h1></td></tr></thead><tbody><tr><td style="border: 1px solid rgb(180, 180, 180); font-family: sans-serif; padding: 10px"><b>';
    $message .= 'Naam';
    $message .= '</b></td><td style="border: 1px solid rgb(180, 180, 180); font-family: sans-serif; padding: 10px">';
    $message .= $name;
    $message .= '</td></tr><tr><td style="border: 1px solid rgb(180, 180, 180); font-family: sans-serif; padding: 10px"><b>';
    $message .= 'E-mailadres';
    $message .= '</b></td><td style="border: 1px solid rgb(180, 180, 180); font-family: sans-serif; padding: 10px">';
    $message .= $from;
    $message .= '</td></tr><tr><td style="border: 1px solid rgb(180, 180, 180); font-family: sans-serif; padding: 10px;" colspan="2"><b>';
    $message .= 'Bericht ';
    $message .= '</b> <br> <br>';
    $message .= $plainMessage;
    $message .= '</td></tr></tbody><tfoot><tr><td colspan="2" style="height: 4px;  background-color: rgb(38, 128, 235); border-radius: 0px 0px 4px 4px;"></td></tr></tfoot></table></td></tr></table></td></tr></table></body></html>';

    $message = chunk_split(base64_encode($message));

    $headers = "From:" . $from . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $headers .= "Content-Transfer-Encoding: base64\r\n\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "succes";
    } else {
        echo "error_get_last()['message']";
    }
}
