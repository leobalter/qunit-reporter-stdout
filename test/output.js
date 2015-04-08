var fs = require( "fs" );
var spawnSync = require( "spawn-sync" );
var QUnit = global.QUnit;

QUnit.assert.regexp = function( actual, expected, message ) {
    var re = new RegExp( expected, "i" );
    var result = re.test( actual );

    this.push( result, actual, expected, message );
};

QUnit.module( "outputs" );

QUnit.test( "all", function( assert ) {
    assert.expect( 12 );

    [ "regular", "minimal", "verbose" ].forEach( function( mode ) {
        var file = __dirname + "/output/" + mode;
        var output, expected, lastLine, emptyLine, errors;

        output = spawnSync( "node", [ file ], {
            encoding: "utf-8"
        } );

        errors = output.stderr;
        output = output.stdout.split( "\n" );

        // Remove last empty and written line
        emptyLine = output.pop();
        lastLine = output.pop();

        output = output.join( "\n" ).trim();

        expected = fs.readFileSync( file + ".txt" ) + "";
        expected = expected.trim();

        assert.ok( !errors, "stderr is clean" );
        assert.regexp( output, expected, mode + " output" );
        assert.strictEqual( emptyLine, "", "output finishes with an empty line" );
        assert.ok(
            /5 assertions in \d+ms, passed: 5, failed: 0/.test( lastLine ),
            mode + " last line" );
    } );
} );
