
var testCase = require('mocha').describe;
var pre = require('mocha').before;
var preEach = require('mocha').beforeEach;
var post = require('mocha').after;
var postEach = require('mocha').afterEach;
var assertions = require('mocha').it;
var assert = require('chai').assert;

testCase('Test Suite', function() {
  pre(function() {
    // ... Single Execution
  });

  preEach(function() {
    // ... Multiple Execution
  });
  
  post(function() {
    // ... Single Execution
  });

  postEach(function() {
    // ... Multiple Execution
  });
  
  testCase('Test'), function() {
    assertions('Description', function() {
      // Code
    });
  };
});
