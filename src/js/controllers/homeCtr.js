(function() {
    'use strict';

angular
.module('relayto')
.controller('homeCtr', homeCtr);

 function homeCtr ($scope, $mdDialog){

    $scope.showDialog = showDialog;
  
    function showDialog($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
         templateUrl:'./src/templates/poppicker.html',
         controller: 'FontPickerCtrl'
      });

    }
  
}

})()