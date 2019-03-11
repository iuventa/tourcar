<?php require_once("classes/page.php");?>
<?php require_once("functions.php");?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php echo get_css();?>
    <title>Document</title>
</head>
<body>
    <?php 
    $page=new Page(1);
    $page->get_page();
    ?>

<?php echo get_js();?>
</body>
</html>