/**
 * 
 */
'use strict';

angular.module('blogDetail').
	component('blogDetail', {
		templateUrl: '/templates/blog-detail.html',
		controller: function(Post, $http, $location, $routeParams, $scope){
			
			console.log(Post.query());
			console.log(Post.get());
			
			Post.query(function(data){
				angular.forEach(data, function(post){
					if(post.id == $routeParams.id){
						$scope.notFound = false;
						$scope.post = post;
					}
//					console.log(post);
				});
			})
			
//			$http.get("/json/posts.json").then(successCallback, errorCallback);
			
			function successCallback(response, status, config, statusText){
				$scope.notFound = false;
//				console.log(response.data);
				var blogItems = response.data;
				$scope.posts = blogItems;
				angular.forEach(blogItems, function(post){
					if(post.id == $routeParams.id){
						$scope.notFound = false;
						$scope.post = post;
					}
//					console.log(post);
				});
			};
			
			function errorCallback(response, status, config, statusText){
				console.log(response);
				
							
			};
			
			if($scope.notFound){
				console.log("Not found");
				$location.path("/");
			};
			
//			var blogItems = [
//				{title: "Some Title", id: 1, description: "This is a book"},
//				{title: "Another Title", id: 2, description: "This is a book"},
//				{title: "One More Title", id: 3, description: "This is a book"},
//				{title: "Last Title", id: 4, description: "This is a book"},
//			]
////			console.log($routeParams);
//			$scope.title = "Blog " + $routeParams.id //this scope belongs to the controller
//			
//			angular.forEach(blogItems, function(post){
//				if(post.id == $routeParams.id){
//					$scope.notFound = false;
//					$scope.post = post;
//				}
//				console.log(post);
//			});
			
		}
	});