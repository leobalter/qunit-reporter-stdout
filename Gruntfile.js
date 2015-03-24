module.exports = function( grunt ) {

require( "load-grunt-tasks" )( grunt );

grunt.initConfig( {
	pkg: grunt.file.readJSON( "package.json" ),
	jshint: {
		options: {
			jshintrc: true
		},
		all: [
			"Gruntfile.js",
			"{lib,test}/**/*.js"
		]
	},
	jscs: {
		options: {
			config: ".jscsrc"
		},
		all: [
			"<%= jshint.all %>"
		]
	},
	watch: {
		options: {
			atBegin: true
		},
		files: [
			".jshintrc",
			".jscsrc",
			"{lib,test}/**/*.js"
		],
		tasks: "default"
	},
	clean: [ "test/temp" ]
} );

grunt.registerTask( "test", function() {
	var done = this.async();
	var reporterDone = require( "./test/stdout.js" );

	reporterDone( function( details ) {
		done( details.failed === 0 );
	} );
} );

grunt.registerTask( "default", [ "jshint", "jscs", "test" ] );

};
