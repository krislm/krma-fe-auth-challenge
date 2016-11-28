(function () {
	'use strict';

	/**
	 * @name application
	 * @description
	 *
	 * Root Application Controller
	 */
	angular
		.module('application')
		.controller('Application', Application);

	/* @ngInject */
	function Application(UserService, $state) {
		/*jshint validthis: true */
		var vm = this;

		vm.debugUser = debugUser;
		vm.debugAdmin = debbugAdmin;
		
		vm.logout = logout;
		
		activate();

		function activate() {

		}
		
		function logout() {
			UserService.logoutUser()
				.then(function() {
					$state.go('application.index');
				});
		}
		
		function debugUser() {
			UserService.debugSetUser('user')
				.then(function(user) {
					$state.go('application.shared');
				});
		}
		
		function debbugAdmin() {
			UserService.debugSetUser('admin')
				.then(function(user) {
					$state.go('application.admins');
				});
		}
	}

})();
