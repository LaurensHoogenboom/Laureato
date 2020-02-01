//add portfolio item

$("#portfolioAdd").submit(function(e) {
    e.preventDefault();

    var form = $(this);

    console.log('fire');

    $.ajax({
        type: "POST",
        url: '/src/php/portfolio.php',
        data: form.serialize(),
        success: function(response) {
            console.log(response);
        }
    });
});

//filter data

$(document).ready(function() {
    $(document).on('change', "#portfolioFilterForm input, #portfolioFilterForm select, #portfolioSizeForm select", function() {
        filterPortfolio();
    });

    $(document).on('submit', "#portfolioFilterForm", function(e) {
        e.preventDefault();

        filterPortfolio();
    });

    $(document).on('click', '#nextPortfolioPageButton', function() {
        var newIndex = parseInt(sessionStorage.getItem('currentPage')) + 1;

        filterPortfolio(newIndex);
    });

    $(document).on('click', '#previousPortfolioPageButton', function() {
        var newIndex = parseInt(sessionStorage.getItem('currentPage')) - 1;

        filterPortfolio(newIndex);
    });
})

function filterPortfolio(pageIndex) {
    page = 0;

    if (pageIndex != null) {
        page = pageIndex;
    }

    var categoryValue = $('#portfolioCategoryInput').val();
    var sortValue = $("#portfolioSortInput").val();
    var searchValue = $("#portfolioSearchInput").val();
    var pageSize = $("#portfolioSizeForm select").val();

    getPortfolioItems(pageSize, page, sortValue, categoryValue, searchValue);
}




