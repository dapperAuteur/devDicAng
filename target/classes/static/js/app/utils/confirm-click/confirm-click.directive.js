/**
 * 
 */
'use strict';

angular.module('confirmClick').
	directive('confirmClick', function(){
		return {
			link: function(scope, element, attr){//console logs for each link
				console.log(scope)//gives ChildScope{} object
				console.log(element)//gives '[a.ng-binding]'
				console.log(attr.confirmClick)//gives nothing
				console.log(attr.ngHref)// gives '/blog/1'
				console.log(attr.href)//gives 'undefined'
			}
		}
	})
