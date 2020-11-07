<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <meta name="theme-color" content="#fafafa" />

    <meta name="keywords" content="<?php echo $pgKeywords ?>">
    <meta name="description" content="<?php echo $pgDesc ?>">

    <title>Laureato - <?php echo $pgName ?></title>

    <link rel="stylesheet" type="text/css" href="/src/css/site.css">

    <script src="/src/js/plugins/jquery-min.js"></script>
    <script src="/src/js/plugins/jquery.visible.js"></script>
    <script src="/src/js/plugins/import.js"></script>
    <script src="/src/js/helpers/dataFilter.js"></script>

    <!-- Start of Woopra Code -->
    <!-- <script>
        (function() {
            var t, i, e, n = window,
                o = document,
                a = arguments,
                s = "script",
                r = ["config", "track", "identify", "visit", "push", "call", "trackForm", "trackClick"],
                c = function() {
                    var t, i = this;
                    for (i._e = [], t = 0; r.length > t; t++)(function(t) {
                        i[t] = function() {
                            return i._e.push([t].concat(Array.prototype.slice.call(arguments, 0))), i
                        }
                    })(r[t])
                };
            for (n._w = n._w || {}, t = 0; a.length > t; t++) n._w[a[t]] = n[a[t]] = n[a[t]] || new c;
            i = o.createElement(s), i.async = 1, i.src = "//static.woopra.com/js/w.js", e = o.getElementsByTagName(s)[0], e.parentNode.insertBefore(i, e)
        })("woopra");

        woopra.config({
            domain: 'laureato.nl'
        });
        woopra.track();
    </script> -->
    <!-- End of Woopra Code -->
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
                <a href="/blog/">Blog</a>
            </div>
        </section>

        <section class="menu">
            <form id="headerPortfolioSearchForm">
                <div class="buttonTextInput">
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