//add portfolio item

$("#portfolioAdd").submit(function (e) {
    e.preventDefault()

    var form = $(this)

    addPortfolioItem(form);
})

//portfolio filter form handling

$(document).ready(function () {
    $(document).on('change', "#portfolioFilterForm input, #portfolioFilterForm select, #portfolioSizeForm select", function () {
        createFilterRequest();
        toggleRemoveFilterButton($(this).closest('form'));
    });

    $(document).on('submit', "#portfolioFilterForm", function (e) {
        e.preventDefault();

        createFilterRequest();
        toggleRemoveFilterButton($(this).closest('form'));
    });

    $(document).on('click', '#nextPortfolioPageButton', function () {
        var newIndex = parseInt(sessionStorage.getItem('currentPage')) + 1;

        setTimeout(function () {
            $("html, body").animate({
                scrollTop: $("html body").offset().top
            }, 300);
        }, 300)

        createFilterRequest(newIndex);
        toggleRemoveFilterButton($(this).closest('form'));
    });

    $(document).on('click', '#previousPortfolioPageButton', function () {
        var newIndex = parseInt(sessionStorage.getItem('currentPage')) - 1;

        setTimeout(function () {
            $("html, body").animate({
                scrollTop: $("html body").offset().top
            }, 300);
        }, 300)

        createFilterRequest(newIndex);
        toggleRemoveFilterButton($(this).closest('form'));
    });
})

function createFilterRequest(pageIndex) {
    page = 0

    if (pageIndex != null) {
        page = pageIndex
    }

    var categoryValue = $('#portfolioCategoryInput').val()
    var sortValue = $("#portfolioSortInput").val()
    var searchValue = $("#portfolioSearchInput").val()
    var pageSize = $("#portfolioSizeForm select").val()

    getPortfolioItems(requestPortfolioBuild)

    function requestPortfolioBuild(items) {
        filterData(items, buildPortfolio, pageSize, page, sortValue, categoryValue, searchValue)
    }
}

$(document).ready(function () {
    $(document).on('click', "#removePortfolioFilters", function () {
        $("#portfolioSizeForm select").val(8)
        $("#portfolioSearchInput").val("")
        $('#portfolioCategoryInput').val("default")
        $("#portfolioSortInput").val("default")

        $("select").change()

        getPortfolioItems(requestPortfolioBuild)

        function requestPortfolioBuild(items) {
            filterData(items, buildPortfolio, null, null, null, null, null, null)
        }

        toggleRemoveFilterButton($(this).closest('form'))
    });
})

//populate portfolio

function buildPortfolio(items) {
    $('#portfolioList').html("");

    items.forEach(function (item) {
        var tumbnailPath = "/portfolio/content/" + item.title + "/tumbnail.jpg";
        var pagePath = "/portfolio/content/" + item.title + '/';
        var icon;

        switch (item.category) {
            case "Art":
                icon = "&#xe903;";
                break;
            case "Web":
                icon = "&#xe902;";
                break;
            case "UI/UX":
                icon = "&#xe904;";
                break;
            default:
                break;
        }

        $('#portfolioList')
            .append(
                $("<div>").addClass('item')
                    .append(
                        $("<div>").addClass('tumbnail').attr('style', 'background-image: url("' + tumbnailPath + '")')
                    )
                    .append(
                        $("<label>").addClass('title').text(item.title)
                            .prepend(
                                $("<span>").addClass('icon').html(icon)
                            )
                    )
                    .append(
                        $("<div>").addClass('content')
                            .append(
                                $("<iframe>").addClass('description').attr('page', pagePath)
                            )
                    )
                    .append(
                        $("<div>").addClass('contentControls')
                            .append(
                                $("<label>").addClass('cross')
                                    .append(
                                        $("<span>")
                                    )
                                    .append(
                                        $("<span>")
                                    )
                            )
                    )
            )
    });

    $("#currentPortfolioPageIndex").text(parseInt(sessionStorage.getItem('currentPage')) + 1);

    if (sessionStorage.getItem('hasNextPage') === 'true') {
        $("#nextPortfolioPageButton").removeClass('hidden');
    }
    else {
        $("#nextPortfolioPageButton").addClass('hidden');
    }

    if (sessionStorage.getItem('hasPreviousPage') === 'true') {
        $("#previousPortfolioPageButton").removeClass('hidden');
    }
    else {
        $("#previousPortfolioPageButton").addClass('hidden');
    }
}
