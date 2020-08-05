//-----------------------blog
//add

$(document).on('submit', '#add-blog-post-form', function (e) {
    e.preventDefault()

    let form = $(this)

    $.ajax({
        type: "POST",
        url: '/src/php/cms/actions/blog.php',
        data: form.serialize(),
        success: function (response) {
            getBlogItems(buildBlogList)
        }
    });

    $(this).closest('.dialog').addClass('hidden')
    $(this)[0].reset()

    $("#blog-list").html("")
})

//get

function getBlogItems(callback) {
    $.ajax({
        type: "POST",
        url: '/src/php/cms/actions/blog.php',
        data: { action: "get" },
        success: function (response) {
            callback(response)
        }
    })
}

function getBlogCategories(callback) {
    $.ajax({
        type: "POST",
        url: '/src/php/cms/actions/blog.php',
        data: { action: "get" },
        success: function (response) {
            callback(response)
        }
    })
}

//update

function updateBlogItem(id, pairs) {
    pairs.forEach(pair => {
        $.ajax({
            type: "POST",
            url: '/src/php/cms/actions/blog.php',
            data: { action: "update", blogId: id, column: pair.label, value: pair.value},
            success: function (response) {
            }
        })
    }) 
}

//remove

function removeBlogItem(item) {
    $.ajax({
        type: "POST",
        url: '/src/php/cms/actions/blog.php',
        data: { action: "delete", blogId: item },
        success: function (response) {
        }
    })
}
