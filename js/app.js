'use strict';

define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers',
	'angularRoute',
	'ngProgress'
	], function (angular, filters, services, directives, controllers,ngProgress) {

		// Declare app level module which depends on filters, and services
		
		return angular.module('myApp', [
			'ngRoute',
			'myApp.filters',
			'myApp.services',
			'myApp.directives',
			'myApp.controllers',
			'ngProgress'
		]);
});
