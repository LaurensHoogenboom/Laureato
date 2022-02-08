$.import_js('/src/js/helpers/dataFormat.js')

function buildBloglist(items) {
    $("#blogList").html("")

    let isFirst = true

    items.forEach(item => {
        let content = JSON.parse(item.content)

        if (item.status === "Published" && content) {
            console.log(item.submitedOn);

            let blogDateTime = new Date(item.submitedOn.replace(' ', 'T'))
            let blogViewDate = getDate.dmy(blogDateTime, "-")
            let blogId = item.id
            let blogURL = `/blog/read?id=${item.id}`

            if (isFirst) {
                content = JSON.parse(item.content).blocks
                let firstParagraph
                let firstImage

                content.forEach(blogPart => {
                    if (!firstParagraph && blogPart.type === "paragraph") {
                        firstParagraph = blogPart.data.text
                    }

                    if (!firstImage && blogPart.type === "image") {
                        firstImage = blogPart.data.url
                    }
                })

                if (!firstImage) {
                    firstImage = '/blog/img/placeholder.jpg'
                }

                $("#blogList")
                    .append(
                        $("<div>").addClass('item')
                            .addClass('blogItem')
                            .addClass('featured')
                            .attr('data-action', 'go-to-page')
                            .attr('data-url', blogURL)
                            .attr('id', blogId)

                            .append(
                                $("<article>")
                                    .append(
                                        $("<h1>").text(`${item.title}`)
                                    )
                                    .append(
                                        $("<p>").addClass('feactured-blog-info')
                                            .append(
                                                $("<label>").text(blogViewDate)
                                                    .prepend(
                                                        $("<span>").addClass('icon').html('&#xe908;')
                                                    )
                                            )
                                            .append(
                                                $("<label>").text(item.category)
                                                    .prepend(
                                                        $("<span>").addClass('icon').html('&#xe909;')
                                                    )
                                            )
                                            .append(
                                                $("<label>").text(item.language)
                                                    .prepend(
                                                        $("<span>").addClass('icon').html('&#xe90b;')
                                                    )
                                            )
                                    )
                                    .append(
                                        $("<p>").html(firstParagraph)
                                    )
                                    .append(
                                        $("<a>").addClass('button').addClass('blue').text('Read').attr('href', blogURL)
                                    )
                            )
                            .append(
                                $("<div>").addClass("tumbnail").css({
                                    'background-image': `url('${firstImage}')`
                                })
                            )
                    )

                isFirst = false
            } else {
                $("#blogList")
                    .append(
                        $("<div>").addClass('item').addClass('blogItem').attr('data-action', 'go-to-page').attr('data-url', blogURL).attr('id', blogId)
                            .append(
                                $("<label>")
                                    .append(
                                        $("<b>").text(item.title)
                                    )
                            )
                            .append(
                                $("<label>").text(blogViewDate)
                                    .prepend(
                                        $("<span>").addClass('icon').html("&#xe908;")
                                    )
                            )
                            .append(
                                $("<label>").text(item.category)
                                    .prepend(
                                        $("<span>").addClass('icon').html("&#xe909;")
                                    )
                            )
                            .append(
                                $("<label>").text(item.language)
                                    .prepend(
                                        $("<span>").addClass('icon').html("&#xe90b;")
                                    )
                            )
                    )
            }
        }
    })

    setPagingButtons()
    toggleRemoveFilterButton('.contentFilter form')
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
        $('.contentFilter #category')
            .prepend(
                $("<option>").text(category).attr('value', category)
            )
    })
}