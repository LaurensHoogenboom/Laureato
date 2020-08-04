<?php 
    $pgName="Blog bewerken";

    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/cms/header.php"; 
?>

<script src="/src/js/cms/blog.js"></script>

<div class="section-toolbar">
    <section class="left">
        
    </section>

    <section class="middle">

    </section>

    <section class="right">
        <a class="button grey" id="blog-save-button">Save</a>
    </section>
</div>

<div class="blog-editor" id="blog-editor">

</div>

<script src="/src/js/cms/blog-edit.js"></script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/cms/footer.php"; 
?>