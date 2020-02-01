function getPortfolioItems(amount, page, sort, category, search) {
    $.ajax({
        type: "POST",
        url: '/src/php/portfolio.php',
        data: { action: "get" },
        success: function (response) {
            var items = response;
            var pageSize = 8;
            var pageIndex = 0;

            if (search != null) {
                items = items.filter(function (item) {
                    return item.title.toLowerCase().includes(search.toLowerCase());
                });
            }

            if (category != "default" && category != null) {
                items = items.filter(function (item) {
                    return item.type == category;
                });
            }

            if (sort != "default" && sort != null) {
                if (sort == "submitDate") {
                    items = items.sort(function (a, b) {
                        return new Date(b.itemDate) - new Date(a.itemDate);
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
            sessionStorage.setItem('hasNextPage', pageSize < items.length && pageSize * pageIndex + 8 < items.length ? true : false);
            sessionStorage.setItem('hasPreviousPage', 0 * pageIndex < pageSize * pageIndex ? true : false)

            console.log(pageSize * pageIndex);  

            items = items.slice(pageIndex * pageSize, pageSize * pageIndex + pageSize);

            buildPortfolio(items);
        }
    })
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
