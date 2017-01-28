<?php

session_start();
include_once ("DBFuncs.php");
include_once ("global.php");

$username = $_POST["username"];
$password = $_POST["password"];
global $db;
$id = $db->userLogin($username, $password);

if ($id == 1)
{
	$_SESSION['userID'] = $id;
	header ("Location: OwnerTools.php?page=ownerTools");
	exit;
}

elseif ($id > 1)
{
	$_SESSION['userID'] = $id;
	header ("Location: index.php");
	exit;
}
include_once ("layout.php");
echo("Invalid login");
include("login.html");

include_once ("footer.html");
?>