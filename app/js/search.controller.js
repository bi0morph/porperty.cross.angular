(function() {
	'use strict';

	function SearchController($scope, NestoriaAPI) {
    $scope.search = {
      query: '',
      error: '',
      locations: [],
      recent: []
    };

    $scope.find = function find() {
      console.dir($scope.search);
      NestoriaAPI.search($scope.search.query)
        .then(function(data) {
          console.log(data.response);
        })
        .catch(function(result) {
          console.log(result);
        });
    };
	}

	angular
		.module('propertCross')
		.controller('SearchController', ['$scope', 'NestoriaAPI', SearchController]);


})();
