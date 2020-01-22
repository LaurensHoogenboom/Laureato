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