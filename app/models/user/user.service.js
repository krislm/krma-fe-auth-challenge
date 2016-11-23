(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('user')
		.service('UserService', User);

	/* @ngInject */
	function User($localStorage, $q, $http) {
		/*jshint validthis: true */

		// Variables
		
		var dummyUser = {
			name: 'Bob',
			email: 'bob@bob.com',
			role: 'user'
		};
		var dummyAdmin = {
			name: 'Boss Man',
			email: 'boss@man.com',
			role: 'admin'
		};

		var service = {
			authenticateUser: authenticateUser,
			authenticateUserWithFacebook: authenticateUserWithFacebook,
			logoutUser: logoutUser,
			user: null,
			userToken: null
		};

		function authenticateUser() {
			var deferred = $q.defer();
			
			//Todo: firebase auth with vm.email && vm.password
			
			$localStorage.set('user', dummyUser);
			
			deferred.resolve();
			
			return deferred.promise;
		}
		function authenticateUserWithFacebook() {
			//Todo: firebase auth with fb
		}
		function logoutUser() {
			
		}
		
		return service;
	}

})();
