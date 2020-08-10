function buildBloglist(items) {
    $("#blogList").html("")

    let isFirst = true

    items.forEach(item => {
        if (item.status === "Published") {
            if (isFirst) {
                let content = JSON.parse(item.content).blocks
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

                if (firstImage) {
                    $("#blogList")
                        .append(
                            $("<div>").addClass('item').addClass('blogItem').addClass('featured')
                                .append(
                                    $("<article>")
                                        .append(
                                            $("<h1>").text(`${item.title} - ${item.category}`)
                                        )
                                        .append(
                                            $("<p>").text(item.submitedOn)
                                        )
                                        .append(
                                            $("<p>").text(firstParagraph)
                                        )
                                        .append(
                                            $("<a>").addClass('button').addClass('blue').text('Read')
                                        )
                                )
                                .append(
                                    $("<div>").addClass("tumbnail").css({
                                        'background-image': `url('${firstImage}')`
                                    })
                                )

                        )
                } else {
                    $("#blogList")
                        .append(
                            $("<div>").addClass('item').addClass('blogItem').addClass('featured')
                                .append(
                                    $("<article>")
                                        .append(
                                            $("<h1>").text(`${item.title} - ${item.category}`)
                                        )
                                        .append(
                                            $("<p>").text(item.submitedOn)
                                        )
                                        .append(
                                            $("<p>").text(firstParagraph)
                                        )
                                        .append(
                                            $("<a>").addClass('button').addClass('blue').text('Read')
                                        )
                                )
                        )
                }
            } else {
                $("#blogList")
                    .append(
                        $("<div>").addClass('item').addClass('blogItem')
                            .append(
                                $("<label>")
                                    .append(
                                        $("<b>").text(item.title)
                                    )
                            )
                            .append(
                                $("<label>").text(item.category)
                            )
                            .append(
                                $("<label>").text(item.submitedOn)
                            )
                    )
            }
        }

        isFirst = false
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