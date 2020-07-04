<?php 
    $pgName="Blog";

    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/cms/header.php"; 
?>

<div class="section-toolbar">
    <section class="right">
        
    </section>

    <section class="middle">
        <label class="button grey" data-action="open-dialog" data-action-context="add-blog-post">
            Add
        </label>
    </section>

    <section class="left">

    </section>
</div>

<div class="dialog hidden" id="add-blog-post">
    <section class="title">
        <h2>Add Blogpost</h2>
    </section>
    <form id="add-blog-post-form">
        <label>Titel</label>
        <input type="text" name="title" required>

        <label>Category</label>
        <select name="category" class="possible-new-select" id="blog-category-input">
            <option value="default">Select an option</option>
            <option value="new-option">New</option>
        </select>
        <input type="text" class="possible-new-input hidden" id="blog-category-input" placeholder="Category name">

        <input type="hidden" value="add" name="action">

        <input type="submit" class="hidden" id="submit-add-blog">
    </form>

    <section class="actions">
        <label class="button grey" data-action="close-dialog" data-action-context="add-blog-post">
            Cancel
        </label>
        <label class="button blue" for="submit-add-blog">
            Add
        </label>
    </section>
</div>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/cms/footer.php"; 
?>