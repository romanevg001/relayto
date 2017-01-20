(function() {
    'use strict';

    angular.module('relayto', [
        'ngResource',
       'ui.router',
       'ngSanitize',
       'ngAria',
       'ngMaterial'
    ])


    .constant('api', {
        url: 'https://www.googleapis.com/webfonts/v1/webfonts',
        googleApiKey: 'AIzaSyCsPLweAi6KOoJ5jgjpAWmwKb-FsLpmjRQ'
    })

  

    .config(function ($stateProvider, $urlRouterProvider) {

  //      $locationProvider.html5Mode(false).hashPrefix('!');

    //    $urlMatcherFactoryProvider.strictMode(false);
        
       
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "./src/templates/home.html",
                controller: 'homeCtr'
            })
           
            $urlRouterProvider.otherwise('/');
    })



    // i8App.config(['$httpProvider', '$urlMatcherFactoryProvider', function ($httpProvider, $urlMatcherFactoryProvider) {
    //     $httpProvider.defaults.withCredentials = true;
    //     $httpProvider.defaults.useXDomain = true;
    //     $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    //     $httpProvider.defaults.headers.common['Content-type'] = 'application/json';
    //     $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    //     $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    //     $httpProvider.interceptors.push('sessionRecoverer');
    // }]);
   

})();
