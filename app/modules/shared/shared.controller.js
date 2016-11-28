(function () {
	'use strict';

	/**
	 * @name application
	 * @description
	 *
	 * Root Application Controller
	 */
	angular
		.module('shared')
		.controller('SharedController', SharedController);

	/* @ngInject */
	function SharedController(user) {
		/*jshint validthis: true */
		var vm = this;
		
		vm.user = user;

		activate();

		function activate() {
			console.log('user: ',user);
		}
	}

})();
