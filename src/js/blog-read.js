//libraries

$.import_js('/src/js/dal/blog.js')
$.import_js('/src/js/helpers/dataFormat.js')

//get url data

const url_string = window.location.href
const url = new URL(url_string)
const blogId = url.searchParams.get("id").trim()

//get the blog to read

let blog

getBlogItems(initialize, { id: blogId })

//initialize the reader

function initialize(possibleBlogs) {
    possibleBlogs.forEach(possibleBlog => {
        if (possibleBlog.id === blogId) {
            blog = possibleBlog
        }
    })

    initializeReaderPage(blog)
    updateViews(blog)
    buildBlog(blog)
}

//initialize blog reader page

function initializeReaderPage(blog) {
    let blogViewDate = getDate.dmy(blog.submitedOn, "-")

    $('#blog-title').text(blog.title)
    $('#blog-subtitle')
        .append(
            blog.category
        )
        .append(
            $("<span>").addClass("seperator").text('|')
        )
        .append(
            blogViewDate
        )
    $('#blog-category')
        .append(
            $("<span>").addClass('seperator').text('')
        )
        .append(
            $("<b>").text(blog.category)
        )
    $('#category-views')
        .append(
            blog.views
        )
}

//update the number of views

function updateViews(blog) {
    let readItems = sessionStorage.getItem('blog-read-history')
    let hasRead = false

    if (readItems) {
        readItems = JSON.parse(readItems)

        readItems.forEach(readedBlog => {
            if (readedBlog === blog.id) {
                hasRead = true
            }
        })
    } else {
        readItems = []
    }

    if (!hasRead) {
        readItems.push(blog.id)
        readItems = JSON.stringify(readItems)
        sessionStorage.setItem('blog-read-history', readItems)

        let numberOfViews = parseInt(blog.views)
        numberOfViews += 1;
    
        let pairs = []
    
        pairs.push({
            label: 'views',
            value: numberOfViews
        })
    
        updateBlogItem(blog.id, pairs, true)
    }  
}

//build the blog

function buildBlog(blog) {
    content = JSON.parse(blog.content).blocks
    blogWrapper = $("#blog")

    console.log(content)

    let itemCount = 0

    content.forEach(part => {
        let itemId = itemCount

        if (part.type === "paragraph") {
            $(blogWrapper)
                .append(
                    $("<p>").html(part.data.text).attr('id', itemId)
                )
        }
        if (part.type === "header") {
            $(blogWrapper)
                .append(
                    $(`<h${part.data.level}>`).html(part.data.text).attr('id', itemId)
                )
        }
        if (part.type === "list") {
            if (part.data.style === "ordered") {
                $(blogWrapper)
                    .append(
                        $("<ol>").attr('id', itemId)
                    )
            }
            if (part.data.style === "unordered") {
                $(blogWrapper)
                    .append(
                        $("<ul>").attr('id', itemId)
                    )
            }

            part.data.items.forEach(listItem => {
                $(`#${itemId}`)
                    .append(
                        $("<li>").text(listItem)
                    )
            })
        }
        if (part.type === "delimiter") {
            $(blogWrapper)
                .append(
                    $("<label>").addClass('delimiter').text("***").attr('id', itemId)
                )
        }
        if (part.type === "warning") {
            $(blogWrapper)
                .append(
                    $("<div>").addClass('warning').attr('id', itemId)
                        .append(
                            $("<span>").addClass('icon').html("&#xe90c;")
                        )
                        .append(
                            $("<p>")
                            .append(
                                $("<b>").text(part.data.title)
                            )
                            .append(
                                $("<br>")
                            )
                            .append(
                                part.data.message
                            )
                        )
                )
        }
        if (part.type === "image") {
            $(blogWrapper)
                .append(
                    $("<div>").addClass('image-wrapper').attr('id', itemId)
                        .append(
                            $('<img>').attr('src', part.data.url)
                        )
                )

            if (part.data.stretched) {
                $(`#${itemId}`).addClass('stretched')
            }
        }

        itemCount++;
    })
}