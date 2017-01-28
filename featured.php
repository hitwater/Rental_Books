<?php 

include_once ("DBFuncs.php");
include_once ("global.php");


global $db;


$featured = '1';


$query = "SELECT `ProductID`, `ProductName`, `ProductDesc`, `UnitsInStock`, `Image`, `UnitPrice` FROM `shopping`.`Products` WHERE `Featured` = '".$featured."'";


$result = $db->executeQuery($query, $_SERVER["SCRIPT_NAME"]);


if (!$result)
{
	$message  = 'Invalid query: ' . mysql_error() . "\n";
	$message .= 'Whole query: ' . $query;
	die($message);
}


$countOfFeaturedItems = 0;
$maxItems = 8; 


while ($row = mysql_fetch_assoc($result))
{
	$countOfFeaturedItems += 1;
}
 

$maxFeaturedItemsIndex = $countOfFeaturedItems-1;


echo '<div id="banner">Featured Items</div>';

if ($countOfFeaturedItems == 0)
{
	echo '<center>There are no featured items to display today. Check back later!</center><br>';
}
else
{

	$array = array();
	for($index = 0; $index < $countOfFeaturedItems && $index < $maxItems; $index++)
	{
		$randomNum = rand(0, $maxFeaturedItemsIndex);
		while(in_array($randomNum, $array))
		{
			$randomNum = rand(0, ($maxFeaturedItemsIndex));
		}
		$array[] = $randomNum;


	}
	 

	mysql_data_seek($result, 0);
}

echo '<div id="products">';

for ($index = 0; $index < count($array); $index++)
{
	mysql_data_seek($result, $array[$index]);
	$row = mysql_fetch_array($result);
	echo '<div class="product"><a href="items.php?prodID='.mysql_result($result, $array[$index], 'ProductID').'"><img src='.mysql_result($result, $array[$index], 'Image').'></br>'
			. mysql_result($result, $array[$index], 'ProductName') .'</a>';
	echo '</br>$'. mysql_result($result, $array[$index], 'UnitPrice') . '</div>';

}
echo '</div></br></br>';
 
 
 


