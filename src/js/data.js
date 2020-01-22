function getPortfolioItems() {
    $.ajax({
        type: "POST",
        url: '/src/php/portfolio.php',
        data: { action: "get" },
        success: function(response) {
            buildPortfolio(response);
        }
    })
}

//populate portfolio

function buildPortfolio(items) {
    items.forEach(function(item) {
        var tumbnailPath = "/portfolio/content/" + item.title + "/tumbnail.jpg";
        var pagePath = "/portfolio/content/" + item.title + '/';

        $('#portfolioList')
        .append(
            $("<div>").addClass('item')
            .append(
                $("<div>").addClass('tumbnail').attr('style', 'background-image: url("' + tumbnailPath + '")')
            )
            .append(
                $("<label>").addClass('title').text(item.title)
                .prepend(
                    $("<span>").addClass('icon').html("&#xe903;")
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
}