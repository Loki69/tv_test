module.exports = function(grunt) {
  var path = require('path');
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({});

  grunt.file.expand('grunt-config/grunt-task-*.js').forEach(loadGruntConfigPart);

  grunt.registerTask('default', ['clean', 'vendor', 'jshint', 'js', 'mocha_slimer']);

  function loadGruntConfigPart(gruntConfigPath) {
    var absolutePath = path.resolve(gruntConfigPath);
    require(absolutePath)(grunt, path.dirname(gruntConfigPath));
  }

  // END Utils
};
