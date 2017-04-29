angular
.module('Module1App',[])
.controller('Module1Controller',MController);
$inject.MController=['$scope'];
function MController($scope){
	$scope.items="";
	$scope.check=function(){
		var items=$scope.items;
		//var myString = 'Hello World. How are you doing?';
var totalitems = items.split(',');
totalitems=totalitems.length;
if(totalitems<3)
	$scope.msg="enjoy!";


else $scope.msg="too much";



	}

}
