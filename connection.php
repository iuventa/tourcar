<?php

$hostName="localhost";
$baseName="tourcar";
$userName="root";
$pass="mybase";

$mysql=new mysqli($hostName,$userName, $pass, $baseName );
if($mysql->connect_error){
    echo "error";
}




?>