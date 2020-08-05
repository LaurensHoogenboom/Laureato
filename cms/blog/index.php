<?php 
    $pgName="Blog";

    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/cms/header.php"; 
?>

<script src="/src/js/cms/blog.js"></script>

<div class="section-toolbar">
    <section class="left">
        
    </section>

    <section class="middle">
        <label class="button grey square" data-action="open-dialog" data-action-context="add-blog-post">
            <span class="cms-icon">
                &#xe903;
            </span>
        </label>
    </section>

    <section class="right">
        <div class="action-group hidden" id="blog-actions">
            <label class="button grey square" data-action="open-dialog" data-action-context="remove-blog-post">
                <span class="cms-icon">
                    &#xe905;
                </span>
            </label>
            <label class="button grey square" data-action="select-all" data-action-context="blog-list">
                <span class="cms-icon">
                    &#xe907;
                </span>
            </label>
        </div>
    </section>
</div>

<script>
    getBlogItems(buildBlogList)
    getBlogCategories(buildBlogCategoryList)
</script>

<div id="blog-list" class="item-list" data-action-group="blog-actions">
    
</div>

<div class="dialog hidden" id="add-blog-post">
    <section class="title">
        <h2>Add Blogpost</h2>
    </section>
    <form id="add-blog-post-form">
        <label>Title</label>
        <input type="text" name="title" required>

        <label>Category</label>
        <select name="category" class="possible-new-select" id="blog-category-input">
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

<div class="dialog hidden" id="remove-blog-post">
    <section class="title">
        <h2>Warning</h2>
    </section>
    <section class="body">
        <p>
            <b>
                Are you sure you want to remove this blog item(s)?
            </b>
        </p>
    </section>
    <section class="actions">
        <label class="button grey" data-action="close-dialog" data-action-context="remove-blog-post">
            Cancel
        </label>
        <label class="button blue" data-action="delete-blog-items" data-action-context="blog-list">
            Remove
        </label>
    </section>
</div>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/cms/footer.php"; 
?>