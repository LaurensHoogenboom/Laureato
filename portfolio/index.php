<?php include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; ?>

<section class="smallMargin left pageTitle">
    <div class="overlay">
        <article>
            <h1>
                Portfolio
            </h1>
            <h3>
                This is what I'm doing. Enjoy.
            </h3>
        </article>
        <div class="content contentFilterWrapper">
            <div class="contentFilter">
                <form id="portfolioFilterForm">
                    <div class="buttonTextInput">
                        <input type="text" placeholder="Search" id="portfolioSearchInput">
                        <label class="icon">
                            &#xe901;
                        </label>
                    </div>
                    <select id="portfolioCategoryInput">
                        <option value="default">Category</option>
                        <option value="UI/UX">UX / UI</option>
                        <option>Web</option>
                        <option>Art</option>
                    </select>
                    <select id="portfolioSortInput">
                        <option value="default">Sort</option>
                        <option value="submitDate">Date</option>
                        <option value="type">Type</option>
                    </select>
                    <a class="button transparent blue" id="removePortfolioFilters">Delete Filters</a>
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
        <div class="itemList" id="portfolioList">
            <script>
                getPortfolioItems();
            </script>
        </div>

        <div class="itemPaging">
            <div class="pageNumber">
                <label class="button grey round" id="previousPortfolioPageButton">
                    <div class="chevron left">
                        <span></span>
                        <span></span>
                    </div>
                </label>
                <label class="button blue square" id="currentPortfolioPageIndex">
                    1
                </label>
                <label class="button grey round" id="nextPortfolioPageButton">
                    <div class="chevron right">
                        <span></span>
                        <span></span>
                    </div>
                </label>
            </div>

            <div></div>

            <div class="pageSize">
                <label>
                    Items per page:
                </label>

                <form id="portfolioSizeForm">
                    <select>
                        <option value="8">
                            8
                        </option>

                        <option value="12">
                            12
                        </option>

                        <option value="16">
                            16
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