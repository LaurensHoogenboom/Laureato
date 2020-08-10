//add portfolio item

$("#portfolioAdd").submit(function(e) {
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

    getPortfolioItems(sendFilterRequest)

    function sendFilterRequest(items) {
        filterPortfolioItems(items, pageSize, page, sortValue, categoryValue, searchValue)
    }
}

$(document).ready(function () {
    $(document).on('click', "#removePortfolioFilters", function () {
        $("#portfolioSizeForm select").val(8)
        $("#portfolioSearchInput").val("")
        $('#portfolioCategoryInput').val("default")
        $("#portfolioSortInput").val("default")

        $("select").change()

        getPortfolioItems(filterPortfolioItems)
        toggleRemoveFilterButton($(this).closest('form'))
    });
})

//filter portfolio items

function filterPortfolioItems(portfolioItems, amount, page, sort, category, search) {
    var items = portfolioItems;
    var pageSize = 8;
    var pageIndex = 0;
    var alienSearch = sessionStorage.getItem('alienSearch');

    sessionStorage.removeItem('alienSearch');

    items = items.sort(function (a, b) {
        return new Date(a.submitDate) < new Date(b.submitDate) ? 1 : -1;
    });

    if (alienSearch) {
        searchByString(alienSearch);
        populateLocalSearch();
    }
    else if (search) {
        searchByString(search);
    }

    function populateLocalSearch() {
        $("#portfolioSearchInput").val(alienSearch)

        $("#portfolioSearchInput").closest('form').find('.removeFilterButton').removeClass('hidden')
    }

    function searchByString(searchTerm) {
        var keywordItems = [];

        items.forEach(function (item) {
            if (item.tags) {
                var keywords = item.tags.split(',');
                var matched = false;

                keywords.forEach(function (keyword) {
                    if (keyword.toLowerCase().includes(searchTerm.toLowerCase())) {
                        matched = true;
                    }
                })

                if (matched == true) {
                    keywordItems.push(item);
                }
            }
        })

        items = items.filter(function (item) {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });

        keywordItems.forEach(function (keywordItem) {
            items.push(keywordItem);
        })
    }

    if (category != "default" && category != null) {
        items = items.filter(function (item) {
            return item.type == category;
        });
    }

    if (sort != "default" && sort != null) {
        if (sort == "submitDate") {
            items = items.sort(function (a, b) {
                return new Date(a.submitDate) > new Date(b.submitDate) ? 1 : -1;
            });
        }
        if (sort == "type") {
            items = items.sort(function (a, b) {
                if (a.type < b.type) {
                    return -1;
                }
                if (a.type > b.type) {
                    return 1;
                }
                return 0;
            });
        }
    }

    if (amount != null) {
        pageSize = amount;
    }
    if (page != null) {
        pageIndex = page;
    }

    sessionStorage.setItem('currentPage', pageIndex);
    sessionStorage.setItem('hasNextPage', pageSize < items.length && pageSize * pageIndex + parseInt(pageSize) < items.length ? true : false);
    sessionStorage.setItem('hasPreviousPage', 0 * pageIndex < pageSize * pageIndex ? true : false)

    $("#closePortfolioFilterMenu").text(`View items (${items.length})`)

    items = items.slice(pageIndex * pageSize, pageSize * pageIndex + parseInt(pageSize));

    buildPortfolio(items);
}

//populate portfolio

function buildPortfolio(items) {
    $('#portfolioList').html("");

    items.forEach(function (item) {
        var tumbnailPath = "/portfolio/content/" + item.title + "/tumbnail.jpg";
        var pagePath = "/portfolio/content/" + item.title + '/';
        var icon;

        switch (item.type) {
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
