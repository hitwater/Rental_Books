<?php

include_once ("DBFuncs.php");
include_once ("global.php");
include_once ("layout.php");

global $db;

$per_page = 24;


$result = $db->getAllProducts();
$total_results = mysql_num_rows($result);
$total_pages = ceil($total_results / $per_page);


if (isset($_GET['page']) && is_numeric($_GET['page']))
{
	$show_page = $_GET['page'];


	if ($show_page > 0 && $show_page <= $total_pages)
	{
		$start = ($show_page -1) * $per_page;
		$end = $start + $per_page;
	}
	else
	{

		$start = 0;
		$end = $per_page;
	}
}
else
{

	$start = 0;
	$end = $per_page;
}




echo '<div id="products">';
for ($i = $start; $i < $end; $i++)
{
	if ($i == $total_results) {
		break;
	}
	echo '
			<div class="product"><a href="items.php?prodID='.mysql_result($result, $i, 'ProductID').'"><img src='.mysql_result($result, $i, 'Image').'></br>'
					. mysql_result($result, $i, 'ProductName') .'</a>';
	echo '</br>$'. mysql_result($result, $i, 'UnitPrice') . '</div>';
}
echo '</div>';
if ($total_results == 0)
{
	echo '<center>There are no items for sale today. Check back later!</center><br>';
}


echo "<center><a href='allView.php'>View All</a> | <b>View Page:</b> ";
for ($i = 1; $i <= $total_pages; $i++)
{
	echo "<a href='pagedView.php?page=$i'>$i</a> ";
}
echo "</center>";
include_once("footer.html");
?>

