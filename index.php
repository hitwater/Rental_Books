<?php 

	session_start();
	include_once ("DBFuncs.php");
	include_once ("global.php");
	include_once ("layout.php");


if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
   if (isset($_GET['page']))
   {

      if ($_GET['page'] == 'login')
      {
         include("login.html");
      }
      elseif ($_GET['page'] == 'create_account')
      {
         include("createAccount.html");
      }
	elseif ($_GET['page'] == 'cart')
      {
         include("cart.php");
      }
	elseif ($_GET['page'] == 'contact')
      {
         include("contact.html");
      }
	elseif ($_GET['page'] == 'policy')
      {
         include("policy.html");
      }
	elseif ($_GET['page'] == 'copyright')
      {
         include("copyright.html");
      }
      else
      {
	  include("featured.php");
	  echo '<div id="banner">All Items</div>';
	  include("pagedView.php");
      }
   }
   else
   {
	  include("featured.php");
	  echo '<div id="banner">All Items</div>';
	  include("pagedView.php");
    }
}
else
   {
	include("featured.php");
	include("pagedView.php");
}


include_once("footer.html");
?>