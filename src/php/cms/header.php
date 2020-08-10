<?php
    session_start();

    if (!isset($_SESSION['user_name']) || !isset($_SESSION['user_id']) || !isset($_SESSION['db']))
    {
      header("location: /");
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CMS | <?php echo $pgName ?></title>

    <link rel="stylesheet" href="/src/css/cms/cms.css">

    <script src="/src/js/plugins/jquery-min.js"></script>
    <script src="/src/js/plugins/import.js"></script>
    <script src="/src/js/cms/cms.js"></script>
    <script src="/src/js/dal/blog.js"></script>
</head>

<body>
    <header>
        <section class="navigation">
            <h1>
                <?php echo $pgName ?>
            </h1>
        </section>
        <section class="toolbar middle">
            <label class="notification hidden" id="cms-notification">
                Test
            </label>
        </section>
        <section class="toolbar left">
            <div class="user-section">
                <div class="avatar" style="background-image: url(/cms/users/default.svg);">
    
                </div>

                <label>
                    <?php echo $_SESSION['user_name'] ?>
                </label>
            </div>
        </section>
    </header>

    <nav>
        <div class="logo">
            <img class="logo" src="/home/img/Laurel_white.svg">
        </div>

        <div class="pages">
            <a class="button transparent square" href="/cms/home/">
                <span class="cms-icon">
                    &#xe902;
                </span>
            </a>
            <a class="button transparent square" href="/cms/blog/">
                <span class="cms-icon">
                    &#xe901;
                </span>
            </a>
        </div>

        <div class="tools">

        </div>
    </nav>

    <div class="content-section">