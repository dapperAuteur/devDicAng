/**
 * 
 */
'use strict';

angular.module('blogList').
	component('blogList', {
		templateUrl: '/templates/blog-list.html',
		controller: function($routeParams, $scope){
			console.log($routeParams);
			var blogItems = [
				{title: "Some Title", id: 1, description: "This is a book"},
				{title: "Another Title", id: 2, description: "This is a book"},
				{title: "One More Title", id: 3, description: "This is a book"},
				{title: "Lastfd Title", id: 4, description: "This is a book"},
			]
			$scope.items = blogItems;
			console.log("hello");
			$scope.title = "hi there"
			$scope.someClickTest = function(){
				console.log("clicked")
				$scope.title = "clicked"
			}
		}
	});