<?php 
$rand=rand();


function get_css(){
    global $rand;
    $css=" <link rel='stylesheet' href='css/style.css?v=".$rand."'>  ";

    return $css;
}
function get_js(){
    global $rand;
    $js=" <script src='js/jquery-3.3.1.min.js'></script>
           <script src='js/jquery-ui.min.js'></script>
           <script src='js/scripts.js?v=".$rand."'></script> ";

    return $js;
}


?>


