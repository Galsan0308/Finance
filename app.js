// ! Дэлгэцтэй ажиллах удирдлага
var UiController = (function(){

   var DomStringsId = {
      type: 'types',
      description: 'descriptions',
      value: 'values'
   }

   return {
      //* Dom-iin String butsaagch
      getDomStrings: function(){
         return DomStringsId; 
      },

      //* Domiin utga butsaagch
      getInputs: function(){
         return {
            type: document.getElementById(DomStringsId.type).value,
            description: document.getElementById(DomStringsId.description).value,
            value: document.getElementById(DomStringsId.value).value
         }
      },
   }

})();
//! Санхүү бодох удирдлага
var FinanceContoller = (function(){

   var Income = function( id, description, value ) {
      this.id = id;
      this.description = description;
      this.value = value;
   }

   var Expense = function( id, description, value ) {
      this.id = id;
      this.description = description;
      this.value = value;
   }

   var data = {
      Items: {
         inc: [],
         exp: []
      },
      Total: {
         inc: 0,
         exp: 0
      }
   }

   return {
      
      addItem: function( type, description, value ){

         var item, id;

         if( data.Items[type].length === 0 )
            id = 1;
         else{
            id = data.Items[type][ data.Items[type].length - 1 ].id + 1;
         }

         if( type == 'inc' ) {
            item = new Income( id, description, value );
         }else {
            item = new Expense( id, description, value );
         }

         data.Items[type].push(item);

         return data;

      },

      seeData: function(){
         return data;
      }

   }

})();
//! Холбох удирдллага
var AppController = (function( UiControl, FinanceControl ){

   var DomStings = UiControl.getDomStrings();
   var input = UiControl.getInputs();

   var ctrlAddItem = function() {
      // FinanceControl.addItem(
      //    input.type,
      //    input.description,
      //    input.value
      // );
      // console.log(FinanceControl.seeData());

      console.log(input.type);
      console.log(input.description);
      console.log(input.value);
   }

   var SetUpEventListener = function(){
      document.querySelector('.add__btn').addEventListener('click', function(){
         ctrlAddItem();
      });
   }

   return {
      init: function() {
         SetUpEventListener();
      }
   }

})( UiController, FinanceContoller );

AppController.init();