<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <script src="/src/js/plugins/jquery-min.js"></script>
</head>
<body>
    <form method="post" id="portfolioAdd">
        <input type="text" name="title">
        <input type="date" name="date">
        <select name="category">
            <option>Art</option>
            <option>UI/UX</option>
            <option>Web</option>
        </select>
        <input type="hidden" value="add" name="action">
        <button type="submit" name="addPortfolio">Save</button>
    </form>

    <script src="/src/js/dal/portfolio.js"></script>
    <script src="/src/js/site.js"></script>
</body>
</html>