(function() {
    'use strict';

angular
.module('relayto')
.controller('mainController', mainController);

 function mainController ($mdDialog){

    this.showDialog = showDialog;
  
    function showDialog($event) {
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: $event,
        controllerAs: 'ctrl',
         templateUrl:'./src/fontpicker/fontpicker.html',
         controller: 'FontPickerController'
      });

    }
  
}

})()