//add portfolio item

$("#portfolioAdd").submit(function (e) {
    e.preventDefault()

    var form = $(this)

    addPortfolioItem(form);
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
                $("<div>").addClass('item').attr('data-action', 'open-self')
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

    setPagingButtons()
    toggleRemoveFilterButton('.contentFilter form')
}
