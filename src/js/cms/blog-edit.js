//editor js modules

$.import_js('/src/js/cms/editorjs/editor.js')
$.import_js('/src/js/cms/editorjs/extensions/header.js')

//editor config var

let editor

//get url data

const url_string = window.location.href
const url = new URL(url_string)
const blogId = url.searchParams.get("id").trim()

//get the blog items

getBlogItems(initialize, { id: blogId })

//get the blog item to edit

let blog

function initialize(blogs) {
    for (const item of blogs) {
        if (item.id === blogId) {
            blog = item
            break
        }
    }

    setEditorWrapper(blog)
    loadEditor(JSON.parse(blog.content))
}

//set the wrapper content

function setEditorWrapper(blog) {
    $('#blogTitle').html(`<b>${blog.title}</b> - ${blog.category}`)
}

//load editor.js

function loadEditor(contentToEdit) {
    editor = new EditorJS({
        holder: 'blog-editor',

        tools: {
            header: {
                class: Header,
                config: {
                    placeholder: 'Enter a header',
                    levels: [1, 2, 3],
                    defaultLevel: 2
                }
            }
        },

        data: contentToEdit,

        autofocus: true
    })
}

//save content

$('#blog-save-button').click(function () {
    editor.save().then((outputData) => {
        let values = []

        values.push({
            label: 'content',
            value: JSON.stringify(outputData)
        })

        updateBlogItem(blogId, values)
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
})


