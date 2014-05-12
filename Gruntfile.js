module.exports = function( grunt ) {
  // Add the library tasks
  grunt.loadNpmTasks( "grunt-contrib-jshint" );

  grunt.initConfig({
    pkg: grunt.file.readJSON( "package.json" ),
    jshint: {
      files: [
        "Gruntfile.js",
        "main.js",
        "package.json",
        "playlist.json"
      ]
    }
  });

  // Register custom tasks
  grunt.registerTask( "default", [ "jshint" ]);
  grunt.registerTask( "travis", [ "jshint" ]);
};
