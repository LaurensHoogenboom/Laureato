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
    })

    $(document).on('submit', "#portfolioFilterForm", function(e) {
        e.preventDefault();

        filterPortfolio();
    })
})

function filterPortfolio() {
    var categoryValue = $('#portfolioCategoryInput').val();
    var sortValue = $("#portfolioSortInput").val();
    var searchValue = $("#portfolioSearchInput").val();
    var pageSize = $("#portfolioSizeForm select").val();

    getPortfolioItems(pageSize, 0, sortValue, categoryValue, searchValue);
}




