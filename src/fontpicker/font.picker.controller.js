(function(){
  "use strict";

  angular
   .module('app.fontpicker')
   .controller('FontPickerController', FontPickerController);

/* @ngInject */
  function FontPickerController(apiGoogleFont, $mdDialog) {
  
      this.choseFont = 'Arial';
      this.defaultText = 'Ag';
      this.crossPlFonts = ['Arial', 'Helvetica', 'Arial Black', 'Gadget', 'Comic Sans MS',
                              'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Lucida Sans Unicode',
                              'Palatino Linotype', 'Tahoma', 'Times New Roman', 'Trebuchet MS','Verdana', 
                              'Symbol', 'Webdings', 'Wingdings'];
      this.allGoogleFonts = '';
      var countOfFonts = 20;
      this.chooseFont = chooseFont;
      this.closeDialog = closeDialog;
      this.getMoreFonts = getMoreFonts;
      this.getFonts = getFonts;
      
      this.getFonts();


      function getFonts(){
          apiGoogleFont.getFonts().then((res)=>{
              let items = res.data.items;
              this.allGoogleFonts = items;
              this.itemsFonts = items.slice(0,countOfFonts);
          },(res)=>{
              this.errors = res.data.error.errors;
          })
      }
      

      function chooseFont (font){
          this.choseFont = font;
      }
     

      function closeDialog() {
        $mdDialog.hide();
      }

      function getMoreFonts () {
        countOfFonts += 20;
        this.itemsFonts = this.allGoogleFonts.slice(0,countOfFonts);
      }
  }
})();