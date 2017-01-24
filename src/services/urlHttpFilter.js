(function() {
    'use strict';

    angular
        .module('relayto')
        .filter("urlHttpFilter", urlHttpFilter);
    
    function urlHttpFilter (){
       return function(val) {
           if(val == undefined) return;
           return val.slice(5);
       }
    }

})();  