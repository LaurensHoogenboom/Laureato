<?php include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; ?>

<section class="smallMargin left pageTitle">
    <div class="overlay">
        <article>
            <h1>
                Portfolio
            </h1>
            <h3>
                Dit is wat ik doe. Kijk gerust eens rond.
            </h3>
        </article>
        <div class="content contentFilterWrapper">
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
                        <option value="default">Categorie</option>
                        <option>UX / UI</option>
                        <option>Web</option>
                        <option>Art</option>
                    </select>
                    <select>
                        <option value="default">Sortering</option>
                        <option>Datum</option>
                        <option>Type</option>
                    </select>
                    <a class="button transparent blue">Filters Wissen</a>
                </form>

                <label class="button blue mobileFilterButton">
                    <span class="text">
                        Filters
                    </span>
                </label>
            </div>
        </div>
    </div>
</section>

<section class="contentList">
    <div class="overlay">
        <div class="itemList">
            <div class="item">
                <div class="tumbnail" style="background-image: url(/portfolio/content/church/kerk.jpg);">
                </div>

                <label class="title">
                    <span class="icon">
                        &#xe903;
                    </span>
                    Kathedraal
                </label>

                <div class="content">
                    <iframe class="description" src="/portfolio/content/church/">
                    </iframe>
                </div>

                <div class="contentControls">
                    <label class="cross">
                        <span></span>
                        <span></span>
                    </label>
                </div>
            </div>

            <div class="item">
                <div class="tumbnail" style="background-image: url(/portfolio/content/church/kerk.jpg);">
                </div>

                <label class="title">
                    <span class="icon">
                        &#xe903;
                    </span>
                    Kathedraal
                </label>

                <div class="content">
                    <iframe class="description">
                    </iframe>
                </div>

                <div class="contentControls">
                    <label class="cross">
                        <span></span>
                        <span></span>
                    </label>
                </div>
            </div>
        </div>

        <div class="itemPaging">
            <div class="pageNumber">
                <label class="button grey round">
                    <div class="chevron left">
                        <span></span>
                        <span></span>
                    </div>
                </label>
                <label class="button blue square">
                    1
                </label>
                <label class="button grey round">
                    <div class="chevron right">
                        <span></span>
                        <span></span>
                    </div>
                </label>
            </div>

            <div></div>

            <div class="pageSize">
                <label>
                    Items per pagina:
                </label>

                <form>
                    <select>
                        <option>
                            10
                        </option>

                        <option>
                            15
                        </option>

                        <option>
                            25
                        </option>
                    </select>
                </form>
            </div>
        </div>
    </div>
</section>

<section class="left">
    <div class="overlay">
        <article>
            <h1>
                Nog meer weten over wat ik doe?
            </h1>
            <p>
                Kijk dan eens naar de diensten die ik lever.
                Ik doe alles wat met User Interface Design, User Experience Design en het web te maken heeft.
                Daarnaast ben ik ook op expressief vlak actief.
            </p>
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