//build functions

function buildBlogList(blogs) {
    console.log(blogs.length)

    if (blogs.length > 0) {
        $('#blog-list').html("")

        blogs.forEach((blog) => {
            let blogDateTime = new Date(blog.submitedOn)
    
            $('#blog-list').append(
                $('<div>').attr("id", blog.id).addClass('blog').addClass('item').attr('data-url', 'blog/edit')
                    .append(
                        $("<div>").addClass('actions')
                            .append(
                                $("<input>").attr('type', "checkbox").attr("id", `select-${blog.id}`)
                            )
                            .append(
                                $("<label>").attr('for', `select-${blog.id}`)
                            )
                    )
                    .append(
                        $("<label>").text(blog.title).addClass('title')
                    )
                    .append(
                        $("<label>").text(blog.category)
                    )
                    .append(
                        $("<label>").text(blog.status)
                    )
                    .append(
                        $("<label>").text(`${blogDateTime.getDate()}-${blogDateTime.getMonth()}-${blogDateTime.getFullYear()} | ${blogDateTime.getHours()}:${blogDateTime.getMinutes()}`)
                    )
            )
        })
    }    
}

function buildBlogCategoryList(blogs) {
    let categories = []

    blogs.forEach((blog) => {
        let category = blog.category.trim()
        let categoryExistsAlready = false

        categories.forEach(existingCategory => {
            if (category === existingCategory) {
                categoryExistsAlready = true
            }
        })

        if (!categoryExistsAlready) {
            categories.push(category)
        }
    })

    categories.forEach(category => {
        $('#blog-category-input')
            .prepend(
                $("<option>").text(category).attr('value', category)
            )
    })

    $('#blog-category-input').find('option').first().attr('selected', 'selected')
    $('#blog-category-input').change()
}

//button actions

$(document).on('click', 'label.button', function () {
    let action = $(this).data('action')

    if (action === "delete-blog-items") {
        let blogListId = `#${$(this).data('action-context')}`
        let blogsToDelete = []
        let dialog = $(this).closest('.dialog')

        $(blogListId).find('.blog').each(function() {
            let checkbox = $(this).find('.actions input[type="checkbox"]')

            if (checkbox.is(':checked')) {
                blogsToDelete.push($(this).attr('id'))

                $(this).addClass('hidden')
            }
        })

        blogsToDelete.forEach(item => {
            removeBlogItem(item)
        })

        $(dialog).addClass('hidden')
    } 
})
