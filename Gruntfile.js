
module.exports = function(grunt) {
// Project configuration.
grunt.initConfig({
  connect: {
    server: {
      options: {
        port: 9001,
        keepalive: true
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-connect');
grunt.registerTask('default', ['connect']);
};
