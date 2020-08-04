<?php 
    $pgName="Blog bewerken";

    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/cms/header.php"; 
?>

<script src="/src/js/cms/blog.js"></script>

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
        <p id="blogTitle"></p>
    </section>

    <section class="right">
        <a class="button grey square" id="blog-save-button">
            <span class="cms-icon">
                &#xe908;
            </span>
        </a>
    </section>
</div>

<div class="blog-editor" id="blog-editor">

</div>

<script src="/src/js/cms/blog-edit.js"></script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/cms/footer.php"; 
?>