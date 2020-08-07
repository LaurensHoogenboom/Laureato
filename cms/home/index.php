<?php 
    $pgName="Dashboard";

    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/cms/header.php"; 
?>

<form id="logout">
    <input type="submit" value="logout" class="hidden" id="logout-button">
</form>

<div class="section-toolbar">
    <section class="left">

    </section>

    <section class="middle">

    </section>

    <section class="right">
        <label class="button grey square" for="logout-button">
            <span class="cms-icon">
                &#xe909;
            </span>
        </label>
    </section>
</div>



<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/cms/footer.php"; 
?>