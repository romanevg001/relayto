(function(angular, undefined){
  "use strict";

  angular
   .module('relayto')
   .controller('FontPickerCtrl', FontPickerCtrl);

  function FontPickerCtrl($scope, apiGoogleFont, $mdDialog) {
  
      $scope.choseFont = 'Arial';
      $scope.defaultText = 'Ag';
      $scope.crossPlFonts = ['Arial', 'Helvetica', 'Arial Black', 'Gadget', 'Comic Sans MS',
                              'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Lucida Sans Unicode',
                              'Palatino Linotype', 'Tahoma', 'Times New Roman', 'Trebuchet MS','Verdana', 
                              'Symbol', 'Webdings', 'Wingdings'];
      $scope.allGoogleFonts = '';
      var countOfFonts = 20;
      $scope.chooseFont = chooseFont;
      $scope.closeDialog = closeDialog;
      $scope.getMoreFonts = getMoreFonts;
      
      
      
      function getFonts(){
          apiGoogleFont.getFonts().then(function(res){
              let items = res.data.items;
              $scope.allGoogleFonts = items;
            $scope.itemsFonts = items.slice(0,countOfFonts);
          },function(res){
              $scope.errors = res.data.error.errors;

          })
      }
      getFonts();
      

      function chooseFont (font){
          $scope.choseFont = font;
      }
     

      function closeDialog() {
        $mdDialog.hide();
      }

      function getMoreFonts () {
        countOfFonts += 20;
        $scope.itemsFonts = $scope.allGoogleFonts.slice(0,countOfFonts);
      }
  }
})(angular);