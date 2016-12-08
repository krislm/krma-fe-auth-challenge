(function () {
	'use strict';

	/**
	 * @name application
	 * @description
	 *
	 * Root Application Controller
	 */
	angular
		.module('register')
		.controller('RegisterController', RegisterController);

	/* @ngInject */
	function RegisterController($state, UserService, nMessages) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.register = register;

		activate();

		function activate() {

		}
		
		function register() {
			UserService.createUser({'name': vm.name,'email':vm.email, 'password':vm.password})
				.then(function(data) {
					console.log(data);
					$state.go('application.shared');
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
