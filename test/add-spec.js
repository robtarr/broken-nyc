import { expect } from 'chai';
import add from '../src/add';

describe('add', () => {
  it('adds 2 numbers', () => {
    expect(add(1,1)).to.equal(2);
  });
});
