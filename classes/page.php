<?php 
require_once("connection.php"); //mysql
class Page{
    protected $id;
    public function __construct($a){
        $this->id=$a;
    }
    public function get_page(){
        global $mysql;
        $pnf='';
        $query="SELECT `page` from `pages` WHERE `id`=".$this->id;
        $res=$mysql->query($query);
        $result=$res->fetch_assoc();
        $page=$result["page"];
        if($page==""){
            $page="404";
            $pnf="404";
        }
        echo "<div class='container_".$this->id." container_style ".$pnf."' >";
        require_once("front/$page.php");
        
        echo "</div>";
    }
}


?>