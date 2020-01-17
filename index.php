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
                Good design means well thought. Beauty is a side product.
            </h3>
            <div class="sliderDots" slider="homeSlider">
                <span class="active" id="0"></span>
                <span id="1"></span>
                <span id="2"></span>
            </div>
        </div>
    </div>

    <div class="chevron down">
        <span></span>
        <span></span>
    </div>
</section>

<section class="largeMargin center laurelLeft">
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
                Over Laureato
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum quis lacus in
                tincidunt. Ut id mattis dolor. Curabitur iaculis ullamcorper aliquam. Nulla enim tortor,
                euismod a rutrum in, auctor vitae lectus. Praesent at egestas ipsum. Vestibulum eget
                justo vitae dolor condimentum egestas. Proin facilisis vestibulum lacus sed finibus.
            </p>
            <ul>
                <li>
                    User Interface & User Experience Design
                </li>
                <li>
                    Webontwikkeling
                </li>
                <li>
                    Klassieke Tekenkunst
                </li>
            </ul>
            <a class="button blue" href="/about/">
                Meer Lezen
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
                Blader door mijn Portfolio
            </h1>
        </article>
        <form>
            <div class="buttonTextInput larger">
                <input type="text" placeholder="Zoeken">
                <label class="icon" for="submitSearch">
                    &#xe901;
                </label>
                <input type="submit" class="hidden" id="submitSearch">
            </div>
        </form>
    </div>
</section>

<section class="left">
    <div class="overlay">
        <article>
            <h1>
                Bevalt het hier?
            </h1>
            <p>
                Als u interesse, vragen of opmerkingen hebt over mijn werk, deze website of deze website of een
                opdracht hebt kunt u gerust contact met me opnemen.
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
            <form>
                <input type="text" placeholder="Naam">
                <input type="text" placeholder="E-mailadres">
                <textarea placeholder="Bericht"></textarea>
                <label class="button blue">Verzenden</label>
            </form>
        </div>
    </div>
</section>

<?php include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; ?>