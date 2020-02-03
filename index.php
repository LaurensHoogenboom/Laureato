<?php include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; ?>

<section class="home">
    <div class="slider" id="homeSlider">
        <div class="slide active" style="background-image: url(/home/img/Slide1.jpg);" id="0">
        </div>

        <div class="slide" style="background-image: url(/home/img/Slide2.jpg);" id="1">
        </div>

        <div class="slide" style="background-image: url(/home/img/Slide3.png);" id="2">
        </div>
    </div>

    <div class="overlay">
        <div class="caption">
            <h1>
                Craftmanschip. Redefined.
            </h1>
            <h3>
                Good design means thought through. Beauty is a side product.
            </h3>
            <div class="sliderDots" slider="homeSlider">
                <span class="active" id="0"></span>
                <span id="1"></span>
                <span id="2"></span>
            </div>
        </div>
    </div>

    <div class="chevron down" id="homePageScroll">
        <span></span>
        <span></span>
    </div>
</section>

<section class="largeMargin center laurelLeft" id="skillSet">
    <div class="overlay">
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
</section>

<section class="left">
    <div class="overlay">
        <article>
            <h1>
                About Laureato
            </h1>
            <p>
                Hi! My name is Laurens Hoogenboom, 19 years old, born in the Netherlands,
                cyclist and a dutch fellow at heart. My main activities are user interface and
                user experience Design, Web development and the creation of classic art.
                In terms of design, I do focus on a well thought functional experience,
                were outer beauty a consequence.
            </p>
            <ul>
                <li>
                    User Interface & User Experience Design
                </li>
                <li>
                    Webdevelopment
                </li>
                <li>
                    Classic Art
                </li>
            </ul>
            <a class="button blue" href="/about/">
                I want to know more
            </a>
        </article>

        <div class="content breakMargin">
            <div class="image" style="background-image: url(/home/img/Me.jpg);">
            </div>
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