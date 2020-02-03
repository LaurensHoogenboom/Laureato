<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Laureato</title>

    <link rel="stylesheet" type="text/css" href="/src/css/site.css">

    <script src="/src/js/jquery-min.js"></script>
    <script src="/src/js/data.js"></script>
    <script src="/src/js/form.js"></script>
</head>

<body>
    <nav>
        <section class="navButton">
            <label class="hamburgerButton" id="navMenuButton">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </section>

        <section class="navMenu">
            <img src="/home/img/logo.svg" id="headerLogo">

            <div class="navLinks" id="navMenu">
                <a href="/">Home</a>
                <a href="/portfolio/">Portfolio</a>
                <a href="/about/">About</a>
            </div>
        </section>

        <section class="menu">
            <form id="headerPortfolioSearchForm">
                <div class="buttonTextInput larger">
                    <input type="text" placeholder="Search" id="headerPortfolioSearchInput">
                    <label class="icon" for="submitHeaderPortfolioSearch">
                        &#xe901;
                    </label>
                    <input type="submit" class="hidden" id="submitHeaderPortfolioSearch">
                </div>
            </form>

            <a class="button transparent square" href="/cms/">
                <span class="icon">
                    &#xe900;
                </span>
            </a>
        </section>
    </nav>

    <main>