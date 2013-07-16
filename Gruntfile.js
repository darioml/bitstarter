module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "assets/css/main.css": "src/less/main.less"
        }
      },
      production: {
        options: {
          paths: ["assets/css"],
          yuicompress: true
        },
        files: {
          "main.css": "less/main.less"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', 'less:development');

};