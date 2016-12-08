(function() {
	'use strict';

	/**
	 * @name config
	 * @description
	 *
	 * Glboal Configuration Module
	 */
	var core = angular.module('config', [
		'DEBUG_ENV',
		'APPLICATION_SETTINGS',
		'angular-loading-bar',
		'cgBusy'
	]);

	core.value('cgBusyDefaults', {
		message:'Loading Stuff',
		backdrop: true,
		templateUrl: '../common/core/loadingindicator/loadingindicator.template.html'
	});

	core.config(configure);

	/* @ngInject */
	function configure(DEBUG_ENV,
					   $logProvider,
					   $stateProvider,
					   $urlRouterProvider,
					   $locationProvider,
					   cfpLoadingBarProvider,
					   $httpProvider,
					   nMessagesProvider) {
		
		var firebaseConfig = {
			apiKey: "AIzaSyANVZSxqb__e8p98E6DaXbXrmYXwkjndIk",
			authDomain: "authchallenge.firebaseapp.com",
			databaseURL: "https://authchallenge.firebaseio.com",
			storageBucket: "authchallenge.appspot.com",
			messagingSenderId: "818571446557"
		};
		firebase.initializeApp(firebaseConfig);
		
		nMessagesProvider.configure({
			verticalPosition: 'top',
			horizontalPosition: 'right'
		});
		
		if($logProvider.debugEnabled && DEBUG_ENV) {
			$logProvider.debugEnabled(true);
		} else {
			$logProvider.debugEnabled(false);
		}

		cfpLoadingBarProvider.includeSpinner = false;
		cfpLoadingBarProvider.latencyThreshold = 100;

		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/404');

		$stateProvider
			.state('application.notfound', {
				url: '/404',
				views: {
					'application@': {
						templateUrl: '404.html'
					}
				}
			})
			.state('error', {
				url: '/503',
				views: {
					'application@': {
						templateUrl: '503.html'
					}
				}
			});
	}

})();
