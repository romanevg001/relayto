describe("GoogleFonts is loade", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});


(function(){
    'use strict';

    angular
        .module('Module')
        .controller('ControllerCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl(Dependencies){
        var vm = this;
        
        init();

        function init(){
        }

    }

}());