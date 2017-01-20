(function() {
    'use strict';

    angular
        .module('relayto')
        .filter("httpFilter", httpFilter);
    
    function httpFilter (){
       return function(val) {
           if(val == undefined) return;
           return val.slice(5);
       }
    }

})();  