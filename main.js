require.config({
  paths:{
               jquery:"bower_components/jquery/dist/jquery",
              underscore:"bower_components/underscore/underscore",
              backbone:"bower_components/backbone/backbone",
              handlebars:"bower_components/handlebars/handlebars",
              // bootstrap:"bower_components/bootstrap/dist/js/bootstrap",
              // bootstrap:"bower_components/bootstrap/dist/css/bootstrap"
  }
});
require(['app'],function(App){
  App.initialize();
});
