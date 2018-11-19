import { StringValidator } from './string-validator';

export class ParseIntBasedZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
      return s.length === 6 && parseInt(s).toString() === s;
  }
}
