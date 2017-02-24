/**
 * 
 */
'use strict';

angular.module('MyModule')
	.config(
		function(
			$stateProvider,
			$urlRouterProvider
			){
			
			$stateProvider
				.state("blog/1", {
					template: "<h1>Hi</h1>"
				})
				.state("blog/2", {
					template: "<blog-list></blog-list>"
				})
				.state("blog/3", {
					template: "You're on 3rd Street!"
				})
		})

//angular.module('MyModule')
//	.config(
//		function(
//			$locationProvider,
//			$routeProvider
//			){
//			
//			$routeProvider.
//				when("/blog/1", {
//					template: "<h1>Hi</h1>"
//				}),
//				when("/blog/2", {
//					template: "<blog-list></blog-list>"
//				}),
//				otherwise({
//					template: "You're On 3rd Street!"
//				})
//	
//	});