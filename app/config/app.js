(function() {
	'use strict';

	/**
	 * @name krma-fe-auth-challenge
	 * @description
	 *
	 * Root Application Module
	 */
	angular
		.module('krma-fe-auth-challenge', [
			'DEBUG_ENV',
			'API_ENDPOINTS',
			'APPLICATION_SETTINGS',
			'ui.router',
			'angular-loading-bar',
			'angulartics',
			'angulartics.google.analytics',
			'nCore',
			'mm.foundation',
			'ngAnimate',
			'ngSanitize',
			'ngTouch',
			'ngStorage',
			'config',
			'application',
			'index',
			'login',
			'admins',
			'shared',
			'register',
			'user',
			/* ---> Do not delete this comment (ngImports) <--- */
	]);
})();
