import { StringValidator } from './string-validator';

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
      return s.length === 6;
  }
}
