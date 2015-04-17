var Reporter = require ( "stdout-reporter" );

module.exports = function( QUnit, options ) {
    var reporter = new Reporter( options );

    QUnit.config.autorun = false;

    QUnit.moduleStart( reporter.moduleStart );
    QUnit.testStart( reporter.testStart );
    QUnit.log( reporter.assertion );
    QUnit.testDone( reporter.testDone );
    QUnit.done( reporter.done );
};
