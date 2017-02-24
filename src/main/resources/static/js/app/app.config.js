/**
 * 
 */
'use strict';

angular.module('MyModule')
	.config(
		function(
			$locationProvider,
			$routeProvider
			){
			
			$locationProvider.html5Mode({
				enabled:true
			})
			$routeProvider.
				when("/", {
					template: "<blog-list></blog-list>"
				}).
				when("/about", {
					templateUrl: "/templates/about.html"
				}).
				when("/blog/1", {
					template: "<h1>Where's 3rd Street?</h1>"
				}).
				otherwise({
					template: "<h1>You're on 3rd Street!</h1>"
				})
		})