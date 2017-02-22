/**
 * 
 */
var app = angular.module("MyModule", ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home-tmpl.html',
			controller: 'HomeCtrl as home'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about-tmpl.html',
			controller: 'HomeCtrl as home'
		})
		.state('settings', {
			url: '/settings',
			templateUrl: 'templates/settings-tmpl.html',
			controller: 'SettingsCtrl as settings'
		})
		.state('profile', {
			url: '/profile',
			templateUrl: 'templates/profile-tmpl.html',
			controller: 'HomeCtrl as home'
		})
		.state('editProfile', {
			url: '/edit-profile',
			templateUrl: 'templates/edit-profile-tmpl.html',
			controller: 'HomeCtrl as home'
		})
		.state('addProfile', {
			url: '/add-profile',
			templateUrl: 'templates/add-profile-tmpl.html',
			controller: 'HomeCtrl as home'
		})
		.state('terms', {
			url: '/terms',
			templateUrl: 'templates/terms-tmpl.html',
			controller: 'TermsCtrl as terms'
		})
		.state('term', {
			url: '/term',
			templateUrl: 'templates/term-tmpl.html',
			controller: 'TermsCtrl as terms'
		})
		.state('editTerm', {
			url: '/editTerm',
			templateUrl: 'templates/edit-term-tmpl.html',
			controller: 'TermsCtrl as terms'
		})
		.state('addTerm', {
			url: '/add-term',
			templateUrl: 'templates/add-term-tmpl.html',
			controller: 'TermsCtrl as terms'
		})
		.state('topics', {
			url: '/topics',
			templateUrl: 'templates/topics-tmpl.html',
			controller: 'TermsCtrl as terms'
		})
		.state('leader-board', {
			url: '/leader-board',
			templateUrl: 'templates/leader-board-tmpl.html',
			controller: 'SettingsCtrl as settings'
		});
	
	//default routing
	$urlRouterProvider.otherwise('/');
});