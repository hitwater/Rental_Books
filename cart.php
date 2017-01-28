<?php

session_start();

include_once('DBFuncs.php');
include_once('global.php');
include_once('layout.php');


$cart = $_SESSION['cart'];
$action = $_GET['action'];
$added = true;
switch ($action) {
	case 'add':
		
		$id = $_POST['id'];
		$row = $db->getOneProduct($id);
		$quantity = $_POST['quantity'];

		if(is_numeric($quantity))
		{
			$quantity = intval($quantity);
			if($quantity >= 0)
			{	
				$num = $quantity;

				if($cart)
				{
					$items = explode(',', $cart);
					$count = array_count_values($items);
					$num = $count[$id] + $quantity;
				}
				

				if($row['UnitsInStock'] < $num) {
					$added = false;
					if($count)
					{
						$min = $row['UnitsInStock']-$count[$id];
					}
					else
					{
						$min = $row['UnitsInStock'];
					}	
				}
				else
				{	$added = true;
					$min = $quantity;

					if ($cart) {
						$cart .= ','.$id;
					} else {
						$cart = $id;
					}
				}
				if (!$cart && $row['UnitsInStock'] > 0) {
					$cart = $id;
				}

				for($i = 1; $i < $min; $i++)
					$cart .= ','.$id;
		
				
			}
		}

		else
		{
			echo('<div style="color:red; text-align:center;">Invalid Quantity entered, item not added to cart</div>');
		}
		break;	
	case 'delete':
		if ($cart) {

			$items = explode(',',$cart);
			$newcart = '';
			foreach ($items as $item) {

				if ($_GET['id'] != $item) {
					if ($newcart != '') {
						$newcart .= ','.$item;
					} else {
						$newcart = $item;
					}
				}
			}
			$cart = $newcart;
		}
		break;
	case 'update':
	if ($cart) {
		$newcart = '';
		$badValue = false;

		foreach ($_POST as $key=>$value) {

			if(is_numeric($value))
			{
				$value = intval($value);
				if (stristr($key,'Quantity')) {
					$id = str_replace('Quantity','',$key);
					$items = ($newcart != '') ? explode(',',$newcart) : explode(',',$cart);
					$newcart = '';

					foreach ($items as $item) {

						if ($id != $item) {
							if ($newcart != '') {
								$newcart .= ','.$item;
							} else {
								$newcart = $item;
							}
						}
					}
					$row = $db->getOneProduct($id);

					if($row['UnitsInStock'] < $value) {
						$added = false;
						$min = $row['UnitsInStock'];	
					}
					else
					{	$added = true;
						$min = $value;
					}
					for ($i=1;$i<=$min;$i++) {
						if ($newcart != '') {
							$newcart .= ','.$id;
						} 
						else {
							$newcart = $id;
						}
					}
				
				}
			}
			else
			{
				$badValue = true;
			}
		}

		if ($badValue)
			echo('<div style="color:red; text-align:center;">Invalid Quantity entered</div>');
	}
	$cart = $newcart;
	break;
}

$_SESSION['cart'] = $cart;
?>

 
<div id="contents">

<h1>Shopping Cart</h1>

<?php
if(!$added)
{
	echo("Sorry, we only have " . $row['UnitsInStock'] . " " .$row['ProductName'] . " in stock.");
}

echo showCart();


echo'<p><a href="index.php?page=home">Continue Shopping</a></p></div>';
include_once('footer.html');


function showCart() {
	global $db;
	$total='';
	$cart = $_SESSION['cart'];
	if ($cart) {
		$items = explode(',',$cart);
		$contents = array();
		foreach ($items as $item) {
			$contents[$item] = (isset($contents[$item])) ? $contents[$item] + 1 : 1;
		}
		$output[] = '<form action="cart.php?action=update" method="post" id="cart">';
		$output[] = '<table class="center">';
		foreach ($contents as $id=>$Quantity) {
			
			$sql = 'SELECT * FROM Products WHERE ProductID = '.$id;
			$result = $db->execute($sql);
			if ( $row=mysql_fetch_array($result))
			{
				extract($row);
				$output[] = '<tr>';
				$output[] = '<td><button type="submit" formaction="cart.php?action=delete&id='.$id.'" class="r">Remove</button></td>';			
				$output[] = '<td><a href="items.php?prodID='.$row['ProductID'].'">'.$ProductName.'</td>';
				$output[] = '<td>$'.$UnitPrice.'</td>';
				$output[] = '<td><input type="text" name="Quantity'.$id.'" value="'.$Quantity.'" size="3" maxlength="3" onkeypress="return isNumberKey(this);"/></td>';
				$output[] = '<td>$'.($UnitPrice * $Quantity).'</td>';
				$total += $UnitPrice * $Quantity;
				$output[] = '</tr>';
			}
		}
		$output[] = '</table>';
		$output[] = '<div style="width:95%;" align="right"><button type="submit">Update cart</button>' .
				'<strong>Grand total: $'.$total.' </strong></div>';
		
		$output[] = '</form><form action="./checkout.php?action=shipping" method="post"><button type="submit">Checkout</button>';
	} else {
		$output[] = '<p>Your shopping cart is empty.</p>';
	}
	return join('',$output);
}
?>
