(function() {
    'use strict';

    angular
        .module('app.fontpicker')
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