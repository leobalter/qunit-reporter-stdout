var spawnSync = require( "spawn-sync" );
var fs = require( "fs" );
var QUnit = global.QUnit;

QUnit.assert.regexp = function( actual, expected, message ) {
    var re = new RegExp( expected, "i" );
    var result = re.test( actual );

    this.push( result, actual, expected, message );
};

QUnit.module( "error outputs" );

QUnit.test( "all", function( assert ) {
    assert.expect( 3 );

    [ "regular", "minimal", "verbose" ].forEach( function( mode ) {
        var file = __dirname + "/output-error/" + mode;
        var output, expected;

        // spawn-sync 1.0.5 return stderr and stdout buffers instead of string
        output = spawnSync( "node", [ file ], {
            stdio: "pipe",
            encoding: "utf-8"
        } ).stderr.toString().trim();

        expected = fs.readFileSync( file + ".txt" ) + "";

        assert.regexp( output, expected.trim(), mode + " error output" );
    } );
} );
