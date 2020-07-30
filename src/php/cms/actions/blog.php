<?php 
    //dev
    $db = new mysqli('localhost', 'root', '', 'laureato') or die(mysqli_error($conn));

    //release 
    //$db = new mysqli('localhost', 'i100603_laurens', '10522848', 'i100603_laureato') or die(mysqli_error($conn));

    if ($_POST) {
        $action = $_POST['action'];

        if ($action == 'add') {
            $id = uniqid();
            $category = $_POST['category'];
            $title = $_POST['title'];

            $db->query("INSERT INTO blogs (id, category, title, submitedOn) VALUES ('$id', '$category', '$title', NOW())") 
                    or die($db->error);
        }

        if ($action == 'get') {
            $result = $db->query("SELECT * FROM blogs");

            $portfolioItems = array();

            while ($row = $result->fetch_assoc()) {
                $portfolioItems[] = $row;
            }

            header('Content-Type: application/json');
            echo json_encode($portfolioItems, JSON_PRETTY_PRINT);
        }
    }
?>