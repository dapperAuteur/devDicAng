/**
 * this is where I add all my global dependencies
 */
'use strict';

angular.module('MyModule', [
	//external
	'ngResource',
	'ngRoute',
	'ui.bootstrap',
	
	//internal
	'blogDetail',
	'blogList',
	'confirmClick'
]);