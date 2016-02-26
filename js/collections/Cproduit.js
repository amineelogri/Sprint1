define([
  'jquery',
  'underscore',
  'backbone',
  'js/models/Mproduit'
],function ($,_,Backbone,Mproduit) {
  var Cproduit=Backbone.Collection.extend(
    {
      model:Mproduit,

      urlInitial:'http://localhost:8080/rest-sample/rest/produits/',
      initialize:function () {},
      getProduit:function (idProduit,v_this) {
        this.url= this.urlInitial+""+idProduit;
  console.log(this.url) ;
    this.fetch().done(function(){
        v_this.render();
           });

  },




    });
  return Cproduit;
});
