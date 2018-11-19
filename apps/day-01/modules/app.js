"use strict";
exports.__esModule = true;
var zip_code_validator_1 = require("./zip-code-validator");
var parseint_based_zipcode_validator_1 = require("./parseint-based-zipcode-validator");
var o1 = new zip_code_validator_1.ZipCodeValidator();
console.log(o1.isAcceptable('123456'));
var o2 = new parseint_based_zipcode_validator_1.ParseIntBasedZipCodeValidator();
console.log(o2.isAcceptable('123456'));
