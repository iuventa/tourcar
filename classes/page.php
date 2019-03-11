<?php 
class Page{
    protected $id;
    public function __construct($a){
        $this->id=$a;
    }
    public function get_page(){
        echo "<div class='container_".$this->id." container_style'>";
        require_once("front/home.php") ;
        echo "</div>";
    }
}


?>