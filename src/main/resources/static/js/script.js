/**
 * 
 */

angular.module("myApp", []);
    
    angular.module("myApp").controller("MainCtrl", function($scope) {
    	
    	$scope.awayScore = 0;
    	$scope.homeScore = 0;
    	
    	$scope.incrementAway = function() {
    		$scope.awayScore++;
    	}
    	
    	$scope.incrementHome = function() {
    		$scope.homeScore++;
    	}
    	
    	$scope.balls = 0;
    	$scope.strikes = 0;
    	$scope.fouls = 0;
    	$scope.outs = 0;
    	
    	$scope.incrementBalls = function() {
    		$scope.balls++;
    	}
    	
    	$scope.incrementStrikes = function() {
    		$scope.strikes++;
    	}
    	
    	$scope.incrementfouls = function() {
    		$scope.fouls++;
    	}
    	
    	$scope.incrementOuts = function() {
    		$scope.outs++;
    	}
    	
//    	$scope.increment = function() {
//    		if($scope.awayScore) {
//    			$scope.awayScore++;
//    			console.log("awayScore: " + awayScore);
//    		} else if($scope.homeScore){
//    			$scope.homeScore++;
//    			console.log("homeScore: " + homeScore);
//    		}
//    	}
    	
    	
    	
    	$scope.toggle1 = function() {
//    		$scope.present != $scope.present;
    		if($scope.present == false) {
    			$scope.present = true;
    		} else {
    			$scope.present = false;
    		}
    	}
    
    	
    });
    

	angular.module("myApp").controller("YourCtrl", function($scope) {
		
		$scope.fouls = 0;
		
		$scope.foul = function() {
			$scope.fouls++;
		}
	})
