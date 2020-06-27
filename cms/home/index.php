<?php
    session_start();

    if (!isset($_SESSION['user_name']) || !isset($_SESSION['user_id']))
    {
      header("location: /");
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="/src/js/jquery-min.js"></script>
    <script src="/src/js/cms.js"></script>
</head>
<body>
    <h1>This is the Laureato CMS</h1>

    <form id="logout">
        <input type="submit" value="logout">
    </form>
</body>
</html>