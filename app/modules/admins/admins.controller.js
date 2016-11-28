(function () {
	'use strict';

	/**
	 * @name application
	 * @description
	 *
	 * Root Application Controller
	 */
	angular
		.module('admins')
		.controller('AdminsController', AdminsController);

	/* @ngInject */
	function AdminsController(user) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.user = user;

		activate();

		function activate() {
			console.log('user: ',user);
		}
	}

})();
