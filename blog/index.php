<?php 
    $pgKeywords="Blog Stories Webdevelopment UI UX Design Classic Art";
    $pgDesc="Stories about what I do: everything related to UX and/or UI design, webdevelopment and classic art.";
    $pgName="Blog";

    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<section class="smallMargin left background pageTitle" style="background-image: url('/blog/img/header.jpg');">
    <div class="overlay">
        <article class="opaque-on-screen">
            <h1>
                Blog
            </h1>
            <h3>
                Stories about the things I do.
            </h3>
        </article>
        <div class="content contentFilterWrapper opaque-on-screen">
            <div class="contentFilter">
                <form>
                    <!-- <div class="buttonTextInput">
                        <input type="text" placeholder="Search" id="search">
                        <label class="icon">
                            &#xe901;
                        </label>
                    </div> -->
                    <select id="category">
                        <option value="default">Category</option>
                    </select>
                    <select id="sort">
                        <option value="default">Sort</option>
                        <option value="submitDate">Date</option>
                        <option value="category">Category</option>
                    </select>
                    <a class="button transparent blue removeFilterButton hidden">Reset</a>
                    <label class="button blue mobileCloseFilterButton">
                        <span class="text">
                            View items
                        </span>
                    </label>
                </form>
            </div>

            <label class="button blue mobileFilterButton">
                <span class="text">
                    Filters
                </span>
            </label>
        </div>
    </div>
</section>

<section class="contentList">
    <div class="overlay">
        <div class="itemList blogList float-on-screen" id="blogList">
            <script>
                $.import_js('/src/js/blog.js')
                $.import_js('/src/js/dal/blog.js')

                $(document).ready(function () {
                    setContentFilterFunctions(getBlogItems, buildBloglist)

                    getBlogItems(requestBlogBuild)

                    function requestBlogBuild(items) {
                        filterData(items, buildBloglist)
                    }

                    getBlogItems(buildBlogCategoryList)
                })
            </script>
        </div>

        <div class="itemPaging">
            <div class="pageNumber">
                <label class="button grey round" id="previous">
                    <div class="chevron left">
                        <span></span>
                        <span></span>
                    </div>
                </label>
                <label class="button blue square" id="current">
                    1
                </label>
                <label class="button grey round" id="next">
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

                <form>
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