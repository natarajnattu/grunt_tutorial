// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
    jshint: {
          options: {
            reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
          },

          // when this task is run, lint the Gruntfile and all js files in src
          build: ['Grunfile.js', 'src/**/*.js']
        },
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n author: nattu */\n'
      },
      build: {
        files: {
          'dist/js/script.min.js': 'src/js/*.js'
        }
      }
    },
    cssmin:{
      options:{
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n author: nattu */\n'
      },
      build:{
        files:{
          'dist/css/master.min.js': 'src/css/master.css',
        }
      }
    },
    htmlmin:{
      build:{
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files:{
          'dist/index.html': 'src/form.html',
        }
      }
    }
  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // register tasks you want to
  grunt.registerTask("default", ["jshint", "uglify", "cssmin", "htmlmin"]);
};
