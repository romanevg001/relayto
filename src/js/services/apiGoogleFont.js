(function() {
    'use strict';

    angular
        .module('relayto')
        .service("apiGoogleFont", apiGoogleFont);
    
    function apiGoogleFont ($http, api){
        return {
            getFonts: function(_d){                            
                return $http({
                    method: 'GET',
                    url: api.url + '?key=' + api.googleApiKey + '&sort=popularity',
                })
            }
          
        }
    }

})();  