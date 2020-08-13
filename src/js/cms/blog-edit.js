//editor js modules

$.import_js('/src/js/cms/editorjs/editor.js')
$.import_js('/src/js/cms/editorjs/extensions/header.js')
$.import_js('/src/js/cms/editorjs/extensions/list.js')
$.import_js('/src/js/cms/editorjs/extensions/simpleImage.js')
$.import_js('/src/js/cms/editorjs/extensions/marker.js')
$.import_js('/src/js/cms/editorjs/extensions/delimeter.js')
$.import_js('/src/js/cms/editorjs/extensions/warning.js')

//editor config var

let editor

//get url data

const url_string = window.location.href
const url = new URL(url_string)
const blogId = url.searchParams.get("id").trim()

//get the blog items and possible categories

getBlogCategories(buildBlogCategoryList)
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
    setEditDialog(blog)
    loadEditor(JSON.parse(blog.content))
}

//set the wrapper content

function setEditorWrapper(blog) {
    $('#blogTitle').html("")

    $('#blogTitle')
        .append(
            $("<b>")
                .append(
                    $("<span>").attr('id', 'title').text(blog.title)
                )
        )
        .append(
            " - "
        )
        .append(
            $("<span>").attr('id', 'category').text(blog.category)
        )
        .append(
            " - "
        )
        .append(
            $("<span>").attr('id', 'language').text(blog.language)
        )

    $('#blog-status-switch').find('.button').each(function () {
        let status = $(this).data('status').trim()

        if (status === blog.status) {
            $(this).addClass('selected')
        }
    })
}

//set blog edit dialog

function setEditDialog(blog) {
    $("#edit-blog-post").find("form")
        .append(
            $("<input>").attr('type', 'text').attr('name', 'id').addClass('hidden').val(blog.id)
        )

    $('#edit-blog-post').find('form input[name="title"]').val(blog.title)

    $('#edit-blog-post').find('form select[name="category"] option').each(function () {
        let optionValue = $(this).val()

        $(this).prop("selected", false)

        if (optionValue.trim() === blog.category.trim()) {
            $(this).prop("selected", true)
        }
    })

    $('#edit-blog-post').find('form select[name="language"] option').each(function () {
        let optionValue = $(this).val()

        $(this).prop("selected", false)

        if (optionValue.trim() === blog.language.trim()) {
            $(this).prop("selected", true)
        }
    })
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
            },
            list: {
                class: List,
                inlineToolbar: true
            },
            image: {
                class: InlineImage,
                inlineToolbar: true,
                config: {
                    unsplash: {
                        appName: 'Laureato Blog Editor',
                        clientId: 'Y_LXy_unpfBxVemBKygXF9m9MrVdkcMQV7wybqQuwhs'
                    }
                }
            },
            marker: {
                class: Marker
            },
            delimiter: Delimiter,
            warning: {
                class: Warning,
                inlineToolbar: true,
                config: {
                    titlePlaceholder: 'Title',
                    messagePlaceholder: 'Message',
                },
            }
        },

        data: contentToEdit,

        autofocus: true,

        logLevel: 'ERROR'
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

//save title and category

$(document).on('submit', '#edit-blog-post-form', function (e) {
    e.preventDefault()

    //get input values

    let id = $(this).find('input[name="id"]').val()
    let title = $(this).find('input[name="title"]').val()
    let category = $(this).find('*[name="category"]').val()
    let language = $(this).find('*[name="language"]').val()
    let pairs = []

    //create keyvaluepairs

    pairs.push({
        label: "title",
        value: title
    })

    pairs.push({
        label: "category",
        value: category
    })

    pairs.push({
        label: "language",
        value: language
    })

    //update the blog

    updateBlogItem(id, pairs)

    //close the dialog

    $(this).closest('.dialog').addClass('hidden')

    //update the editor

    blog.title = title
    blog.category = category

    setEditorWrapper(blog)
    setEditDialog(blog)
})

//switch actions

$(document).on('click', '.switch .button', function () {
    let action = $(this).closest('.switch').data('action')

    if (action === 'change-blog-status') {
        let status = $(this).data('status')
        let pairs = []

        pairs.push({
            label: "status",
            value: status
        })

        updateBlogItem(blog.id, pairs, true, function () {
            notification.succes('cms-notification', `Blog status is set to "${status}".`, 4)
        })
    }
})



