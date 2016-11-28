(function() {
	'use strict';

	/**
	 * @name krma-fe-auth-challenge
	 * @description
	 *
	 * Run phase of the Application.
	 */
	angular
		.module('krma-fe-auth-challenge')
		.run(run);

	function run($state, $rootScope, $localStorage, UserService) {
		
		$rootScope.$storage = $localStorage;
		
		if ($localStorage['user-token']) {
			UserService.userToken = $localStorage['user-token'];
			
		}
		//debug
		if ($localStorage['user']) {
			UserService.user = $localStorage['user'];
		}
		
	}
})();
