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
			debugSetUser: debugSetUser,
			user: null,
			userToken: null
		};

		function authenticateUser() {
			var deferred = $q.defer();
			
			//Todo: firebase auth with vm.email && vm.password
			
			$localStorage.$default({'user': dummyUser});
			service.user = dummyUser;
			deferred.resolve();
			
			return deferred.promise;
		}
		
		function authenticateUserWithFacebook() {
			//Todo: firebase auth with fb
		}
		
		function logoutUser() {
			var deferred = $q.defer();
			delete $localStorage.user;
			deferred.resolve();
			return deferred.promise;
		}
		
		function debugSetUser(role) {
			var deferred = $q.defer();
			
			switch(role) {
				case 'user':
					service.user = dummyUser;
					$localStorage.$default({'user': dummyUser});
					deferred.resolve(dummyUser);
					break;
				case 'admin':
					service.user = dummyAdmin;
					$localStorage.$default({'user': dummyAdmin});
					deferred.resolve(dummyAdmin);
					break;
				default:
					service.user = dummyAdmin;
					$localStorage.$default({'user': dummyAdmin});
					deferred.resolve(dummyAdmin);
			}
			
			return deferred.promise;
		}
		
		return service;
	}

})();
