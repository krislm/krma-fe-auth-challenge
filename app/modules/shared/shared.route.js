(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular.module('shared')
		/* @ngInject */
		.config(function($stateProvider) {

			var Shared = {
				name: 'application.shared',
				url: '/shared',
				views: {
					'application@application': {
						templateUrl: 'modules/shared/shared.template.html',
						controller: 'SharedController',
						controllerAs: 'shared'
					}
				},
				resolve: {
					user: function(UserService) {
						return UserService.user;
					}
				}
			};

			$stateProvider.state(Shared);
		});
})();
