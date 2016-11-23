(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('admins')
		/* @ngInject */
		.config(function($stateProvider) {

			var Admins = {
				name: 'application.admins',
				url: '/admins',
				views: {
					'application@application': {
						templateUrl: 'modules/admins/admins.template.html',
						controller: 'AdminsController',
						controllerAs: 'admins'
					}
				}
			};

			$stateProvider.state(Admins);
		});
})();
