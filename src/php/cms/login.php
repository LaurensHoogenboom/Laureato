<?php
    //dev
    $db = new mysqli('localhost', 'root', '', 'laureato') or die(mysqli_error($conn));

    //release
    //$db = new mysqli('localhost', 'i100603_laurens', '10522848', 'i100603_laureato') or die(mysqli_error($conn));

    if (isset($_POST)) {
        $formUsername = $_POST['username'];
        $formPassword = $_POST['password'];

        $result = $db->query("SELECT * FROM users WHERE email = '$formUsername' OR username = '$formUsername' LIMIT 1")
            or die($db->error);

        if ($result->num_rows > 0) { 
            $user = mysqli_fetch_assoc($result);

            if ($user['password'] == $formPassword) {
                session_start();
                $_SESSION['user_name'] = $user['username'];
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['db'] = $db;

                echo 'OK';
                exit;
            } else {
                echo 'WRONG_PASSWORD';
                exit;
            }
        } else {
            echo 'USER_UNKNOWN';
            exit;
        }
    }
?>

