/**
 * 
 */
'use strict';

angular.module('confirmClick').
	directive('confirmClick', function($rootScope, $location){
		return {
			
			scope: {
				message: "@message",
				post: "=post"
			},
			template: "<a ng-href='#'>{{ post.title }}</a>",
			link: function(scope, element, attr){//console logs for each link
				var msg = scope.message || "Are you sure?";
				element.bind("click", function(event){
					if(window.confirm(msg)){
						console.log('/blog/' + scope.post.id);
						$rootScope.$apply(function(){
							$location.path("/blog/" + scope.post.id);
						})
					}
				})
				console.log(scope);//gives ChildScope{} object
				console.log(element);//gives '[a.ng-binding]'
				console.log(attr.confirmClick);//gives nothing
				console.log(attr.ngHref);// gives '/blog/1'
				console.log(attr.href);//gives 'undefined'
			}
		}
	})
