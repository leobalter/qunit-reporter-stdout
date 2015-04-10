# qunit-reporter-stdout

A QUnit plugin to report the results on node's stdout.

[![Build Status](https://travis-ci.org/leobalter/qunit-reporter-stdout.svg?branch=master)](https://travis-ci.org/leobalter/qunit-reporter-stdout)

## Install

This module requires the original QUnit (on npm as `qunitjs`) in order to run.

```
npm install --save-dev qunitjs qunit-reporter-stdout
```

## Usage

```js
var QUnit = require( "qunitjs" );
var stdout = require( "qunit-reporter-stdout" );

stdout( QUnit[, options ] );

/* and then you write your tests */
...

// and start running the tests
QUnit.load();
```

This module will also disable QUnit.config.autorun in order to make it work properly on async code. Because of this, you need to run `QUnit.load()` after setting your tests to run them.

### Options

- `output`: none (default), `"minimal"` or `"verbose"`
  - with no given value, the default output will list the modules and test names, followed by dots representing each passing assertion.
  - `minimal` will omit the modules and tests names on the output.
  - `verbose` will print a more detailed output.
