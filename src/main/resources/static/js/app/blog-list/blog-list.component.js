/**
 * 
 */
'use strict';

angular.module('blogList').
component('blogList', {
	
	templateUrl: '/templates/blog-list.html',
	controller: function($scope){
		console.log("hello");
		$scope.title = "hi there"
		$scope.someClickTest = function(){
			console.log("clicked")
			$scope.title = "clicked"
		}
	}
});
//	controller('BlogListController', function($scope){
//		console.log("hello");
//		$scope.title = "hi there"
//		$scope.someClickTest = function(){
//			console.log("clicked")
//			$scope.title = "clicked"
//		}
//	});
//	component('blogList');