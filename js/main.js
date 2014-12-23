'use strict';

require.config({
	paths: {
		angular: '../bower_components/angular/angular',
		angularRoute: '../bower_components/angular-route/angular-route',
		ngProgress: '../js/modules/ngProgress',
		angularMocks: '../bower_components/angular-mocks/angular-mocks',
		text: '../bower_components/requirejs-text/text'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
		'angularRoute': ['angular'],
		'ngProgress': {
			deps:['angular','angularRoute'],
			'exports':'ngProgress'
		}
	},
	priority: [
		'angular',
		'angularRoute'
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'routes',
	'run'
], function(angular, app, routes,run) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});
