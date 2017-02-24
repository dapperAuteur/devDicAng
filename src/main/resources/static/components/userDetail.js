/**
 * 
 */
'use strict';

angular.module('MyModule', []).component('userDetail', {
	templateUrl: 'userDetail-tmpl.html',
	controller: function($scope){
		var userDetails = [
			{name: "Anthony", score: 5000, favColor: "bright"}
		]
	$scope.user = userDetails;
	console.log("hello user");
	},
//	bindings: {
//		name: '@'
//	}
});