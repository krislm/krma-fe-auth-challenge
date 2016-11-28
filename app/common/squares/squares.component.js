(function() {
	'use strict';

	/**
	 * @name
	 * @author
	 * @description
	 *
	 */
	angular
		.module('squares')
		.component('squares', {
			bindings: {
				'userRole': '='
			},
			templateUrl: 'common/squares/squares.template.html',
			controller: squaresController,
			controllerAs: 'squares'
		});

	/* @ngInject */
	function squaresController() {
		/*jshint validthis: true */
		var vm = this;
		
		console.log(vm.userRole);
		
		vm.squares = [
			{
				color: 'blue',
				role: 'admin'
			},
			{
				color: 'green',
				role: 'admin'
			},
			{
				color: 'red',
				role: 'user'
			},
			{
				color: 'yellow',
				role: 'user'
			}
		];
	};

})();
