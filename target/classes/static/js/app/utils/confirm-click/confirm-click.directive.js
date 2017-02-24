/**
 * 
 */
'use strict';

angular.module('confirmClick').
	directive('confirmClick', function(){
		return {
			link: function(scope, element, attr){
				console.log(scope)
				console.log(element)
				console.log(attr)
			}
		}
	})
