(function functionName() {
  'use strict';

  angular.module('propertCross', ['ngRoute'])
    .config(['$routeProvider', _config]);

  function _config($routeProvider) {
		$routeProvider
			.when('/', {
  				templateUrl: 'app/templates/search.html',
  				controller: 'SearchController'
  			})
			.otherwise( {
				redirectTo: '/'
			} );
  }


})();
