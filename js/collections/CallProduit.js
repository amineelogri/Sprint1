define([
   'underscore',
   'backbone',
   'js/models/Mproduit'
],function (_,Backbone,Mproduit) {
  var CallProduit=Backbone.Collection.extend({
      model:Mproduit,
        initialize:function () {},
      getAllProduit:function (v_this) {
        this.url='http://localhost:8080/rest-sample/rest/produits/';
        console.log(this.url);
        var thisCollection=this;
          this.fetch().done(function(){
            console.log(thisCollection);
            v_this.render();
          });
       },
  });
  return CallProduit;
});
