// ! Дэлгэцтэй ажиллах удирдлага
var UiController = (function(){

   var DomStrings = {
      type: '.add__type',
      description: '.add_description',
      value: '.add__value'
   }

   return {
      //* Dom-iin String butsaagch
      getDomStrings: function(){
         return DomStrings;
      },

      //* Domiin utga butsaagch
      getInputs: function(){
         return {
            type: document.querySelector(DomStrings.type).value,
            description: document.querySelector(DomStrings.description).value,
            value: document.querySelector(DomStrings.value).value
         }
      }

   }

})();
//! Санхүү бодох удирдлага
var FinanceContoller = (function(){

})();
//! Холбох удирдллага
var AppController = (function(UiControl, FinanceControl){

   

})(UiController, FinanceContoller);