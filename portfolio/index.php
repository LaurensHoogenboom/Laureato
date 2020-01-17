<?php include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; ?>

<section class="smallMargin left">
    <div class="overlay">
        <article>
            <h1>
                Portfolio
            </h1>
            <h3>
                Dit is wat ik doe. Kijk gerust eens rond.
            </h3>
        </article>
        <div class="content">
            <div class="contentFilter">
                <form>
                    <div class="buttonTextInput">
                        <input type="text" placeholder="Zoeken">
                        <label class="icon" for="submitSearch">
                            &#xe901;
                        </label>
                        <input type="submit" class="hidden" id="submitSearch">
                    </div>
                    <select>
                        <option>Categorie</option>
                        <option></option>
                        <option></option>
                    </select>
                    <select>
                        <option>Sortering</option>
                        <option></option>
                        <option></option>
                    </select>
                    <a class="button transparent blue">Filters Wissen</a>
                </form>
            </div>
        </div>
    </div>
</section>

<section class="contentList">
    <div class="overlay">
        <div class="itemList">
            <div class="item">
                <div class="content" style="background-image: url(/portfolio/content/church/kerk.jpg);">

                </div>
                <label class="title">
                    <span class="icon">
                        &#xe903;
                    </span>
                    Kathedraal
                </label>
            </div>

            <div class="item">
                <div class="content" style="background-image: url(/portfolio/content/consilio/consilio.jpg);">

                </div>
                <label class="title">
                    <span class="icon">
                        &#xe904;
                    </span>
                    Consilio
                </label>
            </div>

            <div class="item">
                <div class="content" style="background-image: url(/portfolio/content/tactilephoto/tactilephoto.jpg);">

                </div>
                <label class="title">
                    <span class="icon">
                        &#xe904;
                    </span>
                    Tactile Photo
                </label>
            </div>

            <div class="item">
                <div class="content" style="background-image: url(/portfolio/content/breda/breda.jpg);">

                </div>
                <label class="title">
                    <span class="icon">
                        &#xe903;
                    </span>
                    Breda
                </label>
            </div>

            <div class="item">
                <div class="content" style="background-image: url(/portfolio/content/polderweide/polderweide.jpg);">

                </div>
                <label class="title">
                    De Polderweide
                </label>
            </div>
        </div>
    </div>
</section>

<section class="left">
    <div class="overlay">
        <article>

        </article>
        <div class="content">
    
        </div>
    </div>
</section>





<?php include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; ?>