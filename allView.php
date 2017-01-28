<?php
session_start();
include_once ("DBFuncs.php");
include_once ("global.php");
include_once ("layout.php");

global $db;

$result = $db->getAllProducts();


$total_results = mysql_num_rows($result);
echo '<br><br><br>';
echo '<div id="products">';
if ($total_results == 0)
{
	echo '<center>There are no items for sale today. Check back later!</center><br>';
}
else
{
	for ($i = 0; $i < $total_results; $i++)
	{

		echo '<div class="product"><a href="items.php?prodID='.mysql_result($result, $i, 'ProductID').'"><img src='.mysql_result($result, $i, 'Image').'></br>'
				. mysql_result($result, $i, 'ProductName') .'</a>';
		echo '</br>$'. mysql_result($result, $i, 'UnitPrice') . '</div>';
	}
}
echo '</div>';


echo "</table>";


echo "<center><b>View All</b> | <a href='pagedView.php?page=1'>View Paginated</a></center>";
?>
</body>
</html>
