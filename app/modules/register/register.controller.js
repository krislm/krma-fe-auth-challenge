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
	function RegisterController($state) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.register = register;

		activate();

		function activate() {

		}
		
		function register() {
			//Todo firebase register with vm.name && vm.email && vm.password
			$state.go('application.shared');
		}
	}

})();
