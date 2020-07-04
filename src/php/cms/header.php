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

    <script src="/src/js/jquery-min.js"></script>
    <script src="/src/js/cms/cms.js"></script>
    <script src="/src/js/cms/actions.js"></script>
</head>

<body>
    <header>
        <section class="navigation">
            <h1>
                <?php echo $pgName ?>
            </h1>
        </section>
        <section class="toolbar middle">

        </section>
        <section class="toolbar left">
            <div class="avatar">

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
            <a class="button transparent square" href="/cms/portfolio/">
                <span class="cms-icon">
                    &#xe900;
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