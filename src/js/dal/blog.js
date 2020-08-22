//add

$(document).on('submit', '#add-blog-post-form', function (e) {
    e.preventDefault()

    let form = $(this)

    $.ajax({
        type: "POST",
        url: '/src/php/dal/blog.php',
        data: form.serialize(),
        success: function (response) {
            notification.succes('cms-notification', 'Blog succesfully added.', 4)

            getBlogItems(buildBlogList)
        }
    });

    $(this).closest('.dialog').addClass('hidden')
    $(this)[0].reset()
})

//get

function getBlogItems(callback) {
    $.ajax({
        type: "POST",
        url: '/src/php/dal/blog.php',
        data: { action: "get" },
        success: function (response) {
            callback(response)
        }
    })
}

function getBlogCategories(callback) {
    $.ajax({
        type: "POST",
        url: '/src/php/dal/blog.php',
        data: { action: "get" },
        success: function (response) {
            callback(response)
        }
    })
}

//update

function updateBlogItem(id, pairs, doNotNotify, callback) {
    pairs.forEach(pair => {
        $.ajax({
            type: "POST",
            url: '/src/php/dal/blog.php',
            data: { action: "update", blogId: id, column: pair.label, value: pair.value},
            success: function (response) {
                if (!doNotNotify) {
                    notification.succes('cms-notification', 'Changes succesfully saved.', 4)
                } 

                if (callback) {
                    callback(response)
                }
            }
        })
    }) 
}

//remove

function removeBlogItem(item) {
    $.ajax({
        type: "POST",
        url: '/src/php/dal/blog.php',
        data: { action: "delete", blogId: item },
        success: function (response) {
            notification.succes('cms-notification', 'The selected blog(s) are removed.', 4)
        }
    })
}
