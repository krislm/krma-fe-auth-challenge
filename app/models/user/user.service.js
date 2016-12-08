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
	function User($localStorage, $q, $http, $firebaseAuth) {
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
			createUser: createUser,
			logoutUser: logoutUser,
			debugSetUser: debugSetUser,
			user: null,
			userToken: null,
			auth: $firebaseAuth()
		};

		function authenticateUser(user) {
			var deferred = $q.defer();
			
			service.auth.$signInWithEmailAndPassword(user.email, user.password).then(function(firebaseUser) {
				console.log("Signed in as:", firebaseUser);
				service.user = firebaseUser;
				deferred.resolve(firebaseUser);
			}).catch(function(error) {
				console.log("Authentication failed:", error);
				deferred.reject(error);
			});
			
			// $localStorage.$default({'user': firebaseUser});
			
			return deferred.promise;
		}
		
		function authenticateUserWithFacebook() {
			var deferred = $q.defer();
			
			service.auth.$signInWithPopup("facebook").then(function(firebaseUser) {
				console.log("Signed in as:", firebaseUser);
				service.user = firebaseUser;
				deferred.resolve(firebaseUser);
			}).catch(function(error) {
				console.log("Authentication failed:", error);
				deferred.reject(error);
			});
			
			// $localStorage.$default({'user': firebaseUser});
			
			return deferred.promise;
		}
		
		function createUser(user) {
			var deferred = $q.defer();
			
			service.auth.$createUserWithEmailAndPassword(user.email, user.password).then(function(firebaseUser) {
				console.log("Signed in as:", firebaseUser);
				service.user = firebaseUser;
				deferred.resolve(firebaseUser);
			}).catch(function(error) {
				console.log("Authentication failed:", error);
				deferred.reject(error);
			});
			
			// $localStorage.$default({'user': firebaseUser});
			
			return deferred.promise;
		}
		
		function logoutUser() {
			var deferred = $q.defer();
			service.auth.$signOut().then(function(args) {
				console.log(args);
				service.user = null;
				service.userToken = null;
				deferred.resolve(args);
				delete $localStorage.user;
			}).catch(function(error) {
				console.log("UnAuth failed", error);
				deferred.reject(error);
			});
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
