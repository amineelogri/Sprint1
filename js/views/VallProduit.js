define([
  'jquery',
   'underscore',
   'backbone',
   'handlebars',
   'js/collections/CallProduit'
],function($,_,Backbone,Handlebars,CallProduit){
var Vallproduit=Backbone.View.extend({
    el:$('AllProduis'),
    initialize:function () {
      var source   = $("#templateAfficherAllPoduit").html();
        this.template = Handlebars.compile(source);
        this.collection=new CallProduit();
        this.collection.getAllProduit(this);
    },
    render:function(){
      var renderContent=this.template({
        AllProduit:this.collection.toJSON()
      });
      console.log(renderContent);
      $("#AfficherAllProduit").html(renderContent);
      return this;
    },
});
return Vallproduit;
});
