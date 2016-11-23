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
	function LoginController($state, UserService) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.loginWithFacebook = loginWithFacebook;
		vm.login = login;

		activate();

		function activate() {

		}
		
		function loginWithFacebook() {
			
		}
		
		function login() {
			UserService.authenticateUser();
			var admin = false;
			if (admin) {
				$state.go('applicetion.admins');
			} else {
				$state.go('application.shared');
			}
		}
	}

})();
