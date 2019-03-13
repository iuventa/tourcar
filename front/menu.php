<?php require_once("connection.php"); ?>
<html>


    <div class="menu">
        <div class="black-menu">
            <div class="icons">
                <div class="icon menu-icon">
                </div>
                <div class="icon social">
                    <!-- <img class="social" src="media/images/icon/social.png" alt="social"> -->
                </div>
                <div class="icon search">
                    <!-- <img class="search" src="media/images/icon/search.png" alt="search"> -->
                </div>
            </div>
        </div>
        <div class="opacity-menu">
            <div class="go-center">
                <h1>
                    <a href="index.php">
                        <img src="media/images/logo2.png" alt="logo">
                    </a>
                </h1>
                <ul id="menu">
                    <?php 
                    $menu_name="SELECT `name`, `id` from `menu`";
                    $res=$mysql->query($menu_name);
                    while($mass=$res->fetch_assoc()){
                        echo "<li ".($_REQUEST["pg"]==$mass["id"] ? "class='active'" : "")." link='/tourcar/?pg=".$mass["id"]."' pageId=".$mass["id"].">".$mass["name"]."</li>";
                    }
                    
                    
                    ?>
                </ul>
            </div>
        </div>
    </div>
</html>