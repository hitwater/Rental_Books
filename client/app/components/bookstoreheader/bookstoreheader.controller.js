'use strict';
class BookstoreheaderController {
  /* @ngInject */
  constructor($scope,$state, FirebaseFactory) {
    $scope.isLoggedIn = function(){
    	var loggedIn = window.localStorage.getItem('loggedIn');
    	if(loggedIn){
    		// var user = FirebaseFactory.auth()
    		return true;
    	} else {
    		return false;
    	}
    }

    $scope.editUser = function (){
    	$state.go('editUser');
    }
    $scope.logOut = function (){
    	FirebaseFactory.auth().signOut();
    	window.localStorage.removeItem('loggedIn');
    	$state.go('login');
    }
  }
}

export default BookstoreheaderController;
