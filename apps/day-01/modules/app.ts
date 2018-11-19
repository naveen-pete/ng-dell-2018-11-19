import { ZipCodeValidator } from './zip-code-validator';
import { ParseIntBasedZipCodeValidator } from './parseint-based-zipcode-validator';

const o1 = new ZipCodeValidator();
console.log(o1.isAcceptable('123456'));

const o2 = new ParseIntBasedZipCodeValidator();
console.log(o2.isAcceptable('123456'));
