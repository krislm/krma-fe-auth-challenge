(function () {
	'use strict';

	/**
	 * @name application
	 * @description
	 *
	 * Root Application Controller
	 */
	angular
		.module('login')
		.controller('LoginController', LoginController);

	/* @ngInject */
	function LoginController($state, UserService, nMessages) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.loginWithFacebook = loginWithFacebook;
		vm.login = login;

		activate();

		function activate() {

		}
		
		function loginWithFacebook() {
			UserService.authenticateUserWithFacebook()
				.then(function(data) {
					var admin = false;
					if (admin) {
						$state.go('applicetion.admins');
					} else {
						$state.go('application.shared');
					}
				})
				.catch(function(error) {
					console.log(error);
					nMessages.create({
						type: 'alert',
						content: error.message,
						dismissButton: true,
						dismissButtonHtml: '&times',
						dismissOnClick: true
					});
				});
		}
		
		function login() {
			UserService.authenticateUser({'email':vm.email, 'password':vm.password})
				.then(function(data) {
					var admin = false;
					if (admin) {
						$state.go('applicetion.admins');
					} else {
						$state.go('application.shared');
					}
				})
				.catch(function(error) {
					console.log(error);
					nMessages.create({
						type: 'alert',
						content: error.message,
						dismissButton: true,
						dismissButtonHtml: '&times',
						dismissOnClick: true
					});
				});
		}
	}

})();
