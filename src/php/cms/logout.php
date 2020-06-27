<?php
    if (isset($_POST)) {
        session_start();
        session_destroy();

        echo 'OK';
    }
