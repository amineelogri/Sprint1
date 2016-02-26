define([
    'jquery',
     'underscore',
     'backbone',
     'js/collections/Cproduit'

],function ($,_,Backbone,Cproduit) {
  var Vproduit=Backbone.View.extend(
    {
      el:$('#Produit'),
      initialize:function () {
        this.template=_.template($("#templateAfficherPoduit").html());
        this.collection=new Cproduit();
        var idProduit=$("#idProduit").val();

        
        this.collection.getProduit(idProduit,this);


      },
      render:function () {
        var renderContent=this.template({
          produits:this.collection.toJSON()
        });

        $("#AfficherProduit").html(renderContent);

        return this;
      },
    });

  return Vproduit;

});
