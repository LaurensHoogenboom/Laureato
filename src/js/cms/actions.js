//blog

$(document).on('submit', '#add-blog-post-form', function (e) {
    e.preventDefault()

    var form = $(this);

    $.ajax({
        type: "POST",
        url: '/src/php/cms/actions/blog.php',
        data: form.serialize(),
        success: function (response) {
            console.log(response);
        }
    });

    $(this).closest('.dialog').addClass('hidden')
    $(this)[0].reset()
})