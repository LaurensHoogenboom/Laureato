//editor js modules

$.import_js('/src/js/cms/editorjs/editor.js')
$.import_js('/src/js/cms/editorjs/extensions/header.js')

//editor config var

let editor

//get url data

const url_string = window.location.href
const url = new URL(url_string)
const blogId = url.searchParams.get("id").trim()
const blogTitle = url.searchParams.get("itemTitle")

//get the blog items

getBlogItems(loadEditor, { id: blogId })

function loadEditor(blogItems) {
    //get the content of the right blog item
    let contentToEdit;

    for (const blog of blogItems) {
        if (blog.id === blogId) {
            contentToEdit = JSON.parse(blog.content)
            break
        }
    }

    //initialize the editor

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


