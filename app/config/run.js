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
		
		if ($localStorage.get('user-token')) {
			UserService.userToken = $localStorage.get('user-token');
		}
		
	}
})();
