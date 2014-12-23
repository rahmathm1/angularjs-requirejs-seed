'use strict';

define(['angular', 'app'], function(angular, app) {

	return app.run(function($rootScope, ngProgress) {
	  $rootScope.$on('$routeChangeStart', function(ev,data) {
	    ngProgress.start();
	  });
	  $rootScope.$on('$routeChangeSuccess', function(ev,data) {
	    ngProgress.complete();
	  });
	});

});
