(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('register')
		/* @ngInject */
		.config(function($stateProvider) {

			var Register = {
				name: 'application.register',
				url: '/register',
				views: {
					'application@application': {
						templateUrl: 'modules/register/register.template.html',
						controller: 'RegisterController',
						controllerAs: 'register'
					}
				}
			};

			$stateProvider.state(Register);
		});
})();
