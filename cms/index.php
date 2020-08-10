<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PageXpress</title>

    <link rel="stylesheet" type="text/css" href="/src/css/site.css">

    <script src="/src/js/plugins/jquery-min.js"></script>
    <script src="/src/js/cms/cms.js"></script>
</head>
<body>
    <div class="loginWrapper">
        <form id="loginForm">
            <div class="formTitle">
                <img src="/home/img/logo.svg">
            </div>

            <label id="contactFormStatus" class="formStatus hidden">test</label>
            
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>

            <input type="submit" id="cmsLogin" class="hidden">

            <label class="button blue" for="cmsLogin">Aanmelden</label>
            <a class="button grey" href="/">Terug</a>
        </form>
    </div>
</body>
</html>