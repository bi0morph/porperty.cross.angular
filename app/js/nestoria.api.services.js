(function() {
	'use strict';

	function NestoriaAPI($http, $q) {

		var url = ['http://', 'api.nestoria.co.uk', '/api'].join(''),
			params = ['country=uk', 'pretty=1', 'action=search_listings',
				'encoding=json', 'listing_type=buy', 'page=1'].join('&');
    NestoriaAPI = {
      search: _search
    };

    function _search(query) {
      var _q = $q.defer();

      $http.jsonp( url + params + '&place_name=' + query + '&callback=JSON_CALLBACK')
        .then(function(result) {
					_q.resolve(result.data);
				})
        .catch(_q.reject);
      return _q.promise;
    }

    return NestoriaAPI;
	}

	angular
		.module('propertCross')
		.factory('NestoriaAPI', [ '$http', '$q', NestoriaAPI ]);

})();
