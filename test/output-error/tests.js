module.exports = function( options ) {
    var QUnit = require( "qunitjs" );
    var stdout = require( "../../lib/index.js" );

    stdout( QUnit, options );

    QUnit.module( "foo" );

    QUnit.test( "first test", function( assert ) {
        assert.ok( false );
        assert.equal( 1, 1 );
    } );

    QUnit.test( "second test", function( assert ) {
        assert.ok( true );
    } );

    QUnit.module( "bar" );

    QUnit.test( "first test", function( assert ) {
        assert.ok( true );
        assert.equal( 1, 1 );
        assert.equal( 1, 2 );
    } );

    QUnit.load();
};
