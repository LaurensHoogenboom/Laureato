//add

function addPortfolioItem(form) {
    $.ajax({
        type: "POST",
        url: '/src/php/dal/portfolio.php',
        data: form.serialize(),
        success: function(response) {
            console.log(response)
        }
    })
}

//get

function getPortfolioItems(callback) {
    $.ajax({
        type: "POST",
        url: '/src/php/dal/portfolio.php',
        data: { action: "get" },
        success: function (response) {
            callback(response)
        }
    })
}