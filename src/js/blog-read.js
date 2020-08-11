//libraries

$.import_js('/src/js/dal/blog.js')

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
}

//initialize blog reader page

function initializeReaderPage(blog) {
    $('#blog-title').text(blog.title)
    $('#blog-category').text(blog.category)
}

//update the number of views

function updateViews(blog) {
    let numberOfViews = parseInt(blog.views)
    numberOfViews += 1;

    let pairs = []

    pairs.push({
        label: 'views',
        value: numberOfViews
    })

    updateBlogItem(blog.id, pairs, true)
}

//build the blog

function buildBlog(blog) {
    
}