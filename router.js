define([
     'jquery',
     'underscore',
     'backbone',
     'js/views/Vproduit',
      'js/views/Vallproduit'],function ($,_,Backbone,Vproduit,Vallproduit) {
     var AppRouter=Backbone.Router.extend(
       {
         routes:{
        "":"index",
           "ListProduits":"ListProduits"
         },
         index:function () {
           var VallproduitInstance=new Vallproduit();
          },
         ListProduits:function () {
           var VproduitInstance=new Vproduit();
      //     VproduitInstance.render();
         }
       });
     var initialize=function () {
       var AppRouterInstance=new AppRouter();
       Backbone.history.start();
     };
     return {initialize:initialize};
});
