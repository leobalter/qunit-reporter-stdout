var QUnit = global.QUnit;
var methods = {
        "moduleStart": 0,
        "testStart": 0,
        "log": 0,
        "testDone": 0,
        "done": 0
    };
var methodsList = Object.keys( methods );

// check each logging callback before we export the done method
methodsList.forEach( function( method ) {
    methods[ method ] = QUnit.config.callbacks[ method ].length;
} );

QUnit.module( "stdout reporter" );

QUnit.test( "init", function( assert ) {
    assert.strictEqual( QUnit.config.autorun, false, "config.autorun is set to false" );
    methodsList.forEach( function( method ) {
        assert.strictEqual( methods[ method ], 1, method + " callback set" );
    } );
} );
