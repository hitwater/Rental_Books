<?php
class DBFuncs
{
	var $conn;


	function DBFuncs()
	{
		DEFINE ('DB_USER', 'root');
		DEFINE ('DB_PASSWORD', 'water11014327');
		DEFINE ('DB_HOST', 'localhost');
		DEFINE ('DB_NAME', 'shopping');
		$conn = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD)
		or die ("Could not connect to database" . mysql_error());
			
		$rs = mysql_select_db(DB_NAME,$conn) or die ("Could not select database");

		$this->conn = $conn;
	}


	function userSignup($email, $pw)
	{
		$email = mysql_real_escape_string($email);
		$pw = mysql_real_escape_string($pw);
		$sql = "SELECT * FROM `shopping`.`customers` WHERE `E-mail` = '".$email."'";
		$rs = $this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);

		if (mysql_num_rows($rs) > 0)
		{
			return 0;
		}

		$sql = "INSERT INTO `shopping`.`customers` (`E-mail`, `Password`, `CustomerID`) VALUES ('".$email."', '".$pw."','".$email."')";
		$rs = $this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);

		//Get and return user ID from database
		$sql = "SELECT `CustomerID` FROM `shopping`.`customers` WHERE `E-mail` = '".$email."'";
		$rs = $this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);
		$row = mysql_fetch_assoc($rs);
		return $row['CustomerID'];

	}


	function userLogin($userName, $pw)
	{

		$sql = "SELECT `CustomerID`, `Password` FROM `shopping`.`customers` WHERE `E-mail` = '".$userName."'";
		$rs = $this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);
		$row = mysql_fetch_row($rs);

		if ($pw == $row[1])
		{

			return $row[0];
		}
		else return false;

	}


	function addOrder($custid, $items, $billInfo, $shipInfo)
	{
		$custid = mysql_real_escape_string($custid);
		$sql = "INSERT INTO `shopping`.`orders` (`CustomerID`, `OrderDate`, `ShipName`,
				`ShipEmail`, `ShipPhone`, `ShipAddress`, `ShipCity`, `ShipCountry`, `ShipPostalCode`, 
				`ShipState`) VALUES
				('".mysql_real_escape_string($custid)."', 
				  '".mysql_real_escape_string($shipInfo[OrderDate])."', 
						'".mysql_real_escape_string($shipInfo[ShipName])."', 
						'".mysql_real_escape_string($shipInfo[ShipEmail])."',
						'".mysql_real_escape_string($shipInfo[ShipPhone])."', 
						'".mysql_real_escape_string($shipInfo[ShipAddress])."', 
						'".mysql_real_escape_string($shipInfo[ShipCity])."',
						'".mysql_real_escape_string($shipInfo[ShipCountry])."', 
						'".mysql_real_escape_string($shipInfo[ShipPostalCode])."',
						'".mysql_real_escape_string($shipInfo[ShipState])."')";
		$this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);

		$orderID = mysql_insert_id();


		$sql = "UPDATE `shopping`.`Customers` SET `LastName` = '".mysql_real_escape_string($billInfo[LastName])."', `FirstName` = '".mysql_real_escape_string($billInfo[FirstName])."',
				`PhoneNo` = '".mysql_real_escape_string($billInfo[PhoneNo])."', `Address` = '".mysql_real_escape_string($billInfo[Address])."',
						`City` = '".mysql_real_escape_string($billInfo[City])."', `Country` = '".mysql_real_escape_string($billInfo[Country])."',
								`PostalCode` = '".mysql_real_escape_string($billInfo[PostalCode])."' WHERE `E-mail` = '$custid'";
		$this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);


		for($i = 0; $i < count($items); $i++)
		{
			$prodID = mysql_real_escape_string($items[$i]);
			$i++;
			$price = mysql_real_escape_string($items[$i]);
			$i++;
			$quant = mysql_real_escape_string($items[$i]);
			$sql = "INSERT INTO `shopping`.`Order Details` (`OrderID`, `ProductID`, `UnitPrice`, `Quantity`) VALUES ('".$orderID."','".$prodID."','".$price."','".$quant."')";
			$this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);
				

			$quantity = $items[$i];
			$sql = "SELECT `UnitsInStock` FROM `shopping`.`Products` WHERE `ProductID` = '".$prodID."'";
			$rs = $this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);
			$row = mysql_fetch_array($rs);
			$newUnits = $row[UnitsInStock] - $quantity;
			$sql = "UPDATE `shopping`.`Products` SET `UnitsInStock` = '$newUnits' WHERE `ProductID` = '$prodID'";
			$this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);
		}

	}

	function getAllProducts()
	{

		$sql = "SELECT `ProductID`,`UnitsInStock`,`ProductDesc`,`ProductName`, `Image`, `UnitPrice` FROM `shopping`.`Products`";
		$rs = $this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);
		return $rs;
	}

	function getOneProduct($prodID)
	{

		$sql = "SELECT `ProductID`, `UnitsInStock`,`ProductDesc`,`ProductName`, `Image`, `UnitPrice`, `Featured` FROM `shopping`.`Products` WHERE `ProductID` = '$prodID'";
		$rs = $this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);
		return mysql_fetch_array($rs);
	}

	function addProduct($productArr)
	{
		$name = mysql_real_escape_string($productArr[0]);
		$desc = mysql_real_escape_string($productArr[1]);
		$price = mysql_real_escape_string($productArr[2]);
		$units = mysql_real_escape_string($productArr[3]);
		$image = mysql_real_escape_string($productArr[4]);
		$featured = mysql_real_escape_string($productArr[5]);

		$sql = "INSERT INTO `shopping`.`Products` ( `UnitsInStock`,`ProductDesc`, `ProductName`, `Image`,`UnitPrice`,  `Featured`)
				VALUES ('".$price."', '".$desc."', '".$name."', '".$image."','".$units."', '".$featured."')";

		$this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);

	}

	function deleteProduct($prodID)
	{
		mysql_real_escape_string($prodID);
		$sql = "DELETE FROM `shopping`.`Products` WHERE `ProductID` = '$prodID'";
		$this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);
	}

	function updateProduct($prodID, $productArr)
	{
		$prodID = mysql_real_escape_string($prodID);
		$name = mysql_real_escape_string($productArr[0]);
		$desc = mysql_real_escape_string($productArr[1]);
		$price = mysql_real_escape_string($productArr[2]);
		$units = mysql_real_escape_string($productArr[3]);
		$image = mysql_real_escape_string($productArr[4]);
		$featured = mysql_real_escape_string($productArr[5]);
		$sql = "UPDATE `shopping`.`Products` SET `ProductName` = '$name', `ProductDesc` = '$desc',
				`UnitsInStock` = '$units', `Image` = '$image', `UnitPrice` = '$price', `Featured` = '$featured'
						WHERE `ProductID` = '$prodID'";
		$this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);

	}

	function getOrders()
	{
		$sql = "SELECT * FROM `shopping`.`Orders`";
		$rs = $this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);
		return $rs;
	}

	function execute($sql)
	{
		return $this->executeQuery($sql, $_SERVER["SCRIPT_NAME"]);
	}

	function executeQuery($sql, $filename)
	{
		$rs = mysql_query($sql, $this->conn) or die("Could not execute query '$sql' in $filename " . mysql_error());
		return $rs;
	}
}
