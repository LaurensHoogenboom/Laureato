<?php 
    $pgKeywords="About Me My Work Design Philosophy Portfolio";
    $pgDesc="Learn about me, my work and my design philosophy. I do everything what has to do with UX and/or UI design, webdevelopment and classic art.";
    $pgName="About";

    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<section class="smallMargin left background pageTitle" style="background-image: url(/about/img/header.jpg);">
    <div class="overlay">
        <article>
            <h1>
                About Laureato
            </h1>
            <h3>
                Laurens comes from Laurentius which refers to Laurel leaves
            </h3>
        </article>
    </div>
</section>

<section class="right">
    <div class="overlay">
        <div class="content center">
            <img src="/about/img/CardSet.png">
        </div>

        <article>
            <h1>
                Hey, I am Laurens Hoogenboom.
            </h1>
            <h3>
                About Me.
            </h3>
            <p>
                19 years old, born in the Netherlands, adventurous cyclist, dutch fellow at heart and...
                Ah right, a designer, artist, and developer. <br>
                In short, I create human-centered stuff using technology and create art to express my vision on our
                beautiful world.
            </p>
            <p>
                The passion for the things I do right now was born in my childhood.
                The oldest drawings, luckily saved from the bin, are made at the age of 10.
                User Experience and User Interface design was something I started doing at
                the age of 11 - although I wouldn't name it like that at that time.
            </p>

            <h3>
                Design Philosophy
            </h3>
            <p>
                I do believe in design as a process of thinking through and applying gathered
                information in a product. Outer beauty serves or is a consequence of this progress.
            </p>
            <a class="button" href="/about/doc/Curiculum Vitae.pdf" target="_blank">Curiculum Vitae</a>
        </article>
    </div>
</section>

<section class="largeMargin center">
    <div class="overlay">
        <article class="forceMargin">
            <h1>
                Skill & Tools
            </h1>
            <p>
                These are my skills sorted out over my different field of activity.
            </p>
        </article>

        <div class="iconSet detail">
            <label>
                <span class="icon">
                    &#xe903;
                </span>
                <h2>
                    Classic Art
                </h2>
                <ul>
                    <li>
                        Portraits & Animals
                    </li>
                    <li>
                        Architecture
                    </li>
                    <li>
                        Landscapes
                    </li>
                </ul>
            </label>
            <label>
                <span class="icon">
                    &#xe902;
                </span>
                <h2>
                    Web
                </h2>
                <ul>
                    <li>
                        HTML & CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        PHP
                    </li>
                </ul>
                <ul>
                    <li>
                        .Net
                    </li>
                    <li>
                        C#
                    </li>
                    <li>
                        SQL
                    </li>
                </ul>
            </label>
            <label>
                <span class="icon">
                    &#xe904;
                </span>
                <h2>
                    UI/UX
                </h2>
                <ul>
                    <li>
                        Modile & Desktop Applications
                    </li>
                    <li>
                        Websites & Webstores
                    </li>
                    <li>
                        Hardware
                    </li>
                </ul>
            </label>
        </div>
    </div>
</section>

<section class="smallMargin center laurelRight">
    <div class="overlay">
        <article class="forceMargin">
            <h1>
                Browse my portfolio
            </h1>
        </article>
        <form id="alienPortfolioSearchForm">
            <div class="buttonTextInput larger">
                <input type="text" placeholder="Search" id="alienPortfolioSearchInput">
                <label class="icon" for="submitPortfolioSearch">
                    &#xe901;
                </label>
                <input type="submit" class="hidden" id="submitPortfolioSearch">
            </div>
        </form>
    </div>
</section>

<section class="left">
    <div class="overlay">
        <article>
            <h1>
                Do you like it here?
            </h1>
            <p>
                Missing any information or having questions or tips about my work or this website?
                Feel free to contact me! Similarly, if you want to submit an order or if you just want
                to have a chat, use the information below and I’ll get back to you as soon as possible!
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

        <div class="content">
            <form id="contactForm">
                <label id="contactFormStatus" class="formStatus hidden">test</label>
                <input type="text" placeholder="Name" name="name">
                <input type="email" placeholder="Email Address" name="email">
                <textarea placeholder="Message" name="message"></textarea>
                <input type="submit" id="submitContactForm" class="hidden">
                <label class="button blue" for="submitContactForm">Send</label>
            </form>
        </div>
    </div>
</section>

<?php include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; ?>