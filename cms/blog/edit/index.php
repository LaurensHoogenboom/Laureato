<?php
$pgName = "Edit Blogpost";

include $_SERVER['DOCUMENT_ROOT'] . "/src/php/cms/header.php";
?>

<script src="/src/js/cms/blog.js"></script>
<link rel="stylesheet" href="/src/css/cms/editorjs.css">

<div class="section-toolbar">
    <section class="left">
        <a class="button grey square" href="/cms/blog">
            <label class="chevron left">
                <span></span>
                <span></span>
            </label>
        </a>
    </section>

    <section class="middle">
        <label id="blogTitle" class="button transparent" data-action="open-dialog" data-action-context="edit-blog-post"></label>
    </section>

    <section class="right">
        <div class="switch" data-action="change-blog-status" id="blog-status-switch">
            <label class="button grey" data-status="Published">
                Published
            </label>

            <label class="button grey" data-status="Concept">
                Concept
            </label>
        </div>

        <a class="button grey square" id="blog-save-button">
            <span class="cms-icon">
                &#xe908;
            </span>
        </a>
    </section>
</div>

<div class="blog-editor" id="blog-editor">

</div>

<div class="dialog hidden" id="edit-blog-post">
    <section class="title">
        <h2>Edit Blogpost</h2>
    </section>

    <form id="edit-blog-post-form">
        <label>Title</label>
        <input type="text" name="title" required>

        <label>Category</label>
        <select name="category" class="possible-new-select" id="blog-category-input">
            <option value="new-option">New</option>
        </select>
        <input type="text" class="possible-new-input hidden" id="blog-category-input" placeholder="Category name">

        <label>Language</label>
        <select name="language">
            <option value="EN">English</option>
            <option value="NL">Dutch</option>
        </select>

        <input type="hidden" value="add" name="action">

        <input type="submit" class="hidden" id="submit-edit-blog">
    </form>

    <section class="actions">
        <label class="button grey" data-action="close-dialog" data-action-context="edit-blog-post">
            Cancel
        </label>
        <label class="button blue" for="submit-edit-blog">
            Save
        </label>
    </section>
</div>

<script src="/src/js/cms/blog-edit.js"></script>

<?php
include $_SERVER['DOCUMENT_ROOT'] . "/src/php/cms/footer.php";
?>