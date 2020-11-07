<?php
$pgKeywords = "Blog Stories Webdevelopment UI UX Design Classic Art";
$pgDesc = "Stories about what I do: everything related to UX and/or UI design, webdevelopment and classic art.";
$pgName = "Blog";

include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php";
?>

<section class="smallMargin left background pageTitle" style="background-image: url('/blog/img/header.jpg');">
    <div class="overlay">
        <article class="opaque-on-screen">
            <h1 id="blog-title">
            </h1>
            <h3 id="blog-subtitle">
            </h3>
        </article>
    </div>
</section>

<div class="seccondary-nav">
    <div class="left">
        <a href="/blog/" class="button grey">
            <label class="chevron left">
                <span></span>
                <span></span>
            </label>
            <span class="text">
                Blog
            </span>
        </a>
        <label id="blog-category">

        </label>
    </div>
    <div class="middle">

    </div>
    <div class="right">
        <label id="category-views">
            <span class="icon">
                &#xe90a;
            </span>
        </label>
    </div>
</div>

<section class="center blog">
    <div class="overlay">
        <script>
            $.import_js('/src/js/blog-read.js')
        </script>

        <article id="blog" class="float-on-screen">

        </article>
    </div>
</section>

<section class="left">
    <div class="overlay">
        <article class="opaque-on-screen">
            <h1>
                Do you want to know more about me or what I do?
            </h1>
            <p>
                Have a look at my about page. If you still have questions
                you can contact me using the information below.
            </p>
            <ul>
                <li>
                    info@laureato.nl
                </li>
                <li>
                    (+31) 6 22 85 48 00
                </li>
            </ul>
        </article>
        <div class="content center">
            <div class="iconSet">
                <label>
                    <span class="icon">
                        &#xe902;
                    </span>
                    <h2>
                        Web
                    </h2>
                </label>
                <label>
                    <span class="icon">
                        &#xe903;
                    </span>
                    <h2>
                        Classic Art
                    </h2>
                </label>
                <label>
                    <span class="icon">
                        &#xe904;
                    </span>
                    <h2>
                        UI/UX
                    </h2>
                </label>
            </div>
        </div>
    </div>
</section>

<?php include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; ?>