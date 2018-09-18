/**
 * Node.js eccrypto implementation.
 * @module eccrypto
 */

"use strict";

// try to use Node.js-specific dependencies, fallback to browser implementation
try {
  module.exports = require("./node");
} catch (e) {
  console.log(e)
}
