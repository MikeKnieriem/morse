import {expect} from "chai";
import { morseToText } from './morseCodeConverter';

describe('morseCodeConverter', () => {
  it('can convert "..." to "S"' , () => {
    expect(morseToText("... --- ...")).to.be.equal("SOS");
  })
});