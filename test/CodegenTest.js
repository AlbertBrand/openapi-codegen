/* @flow */
/* eslint-env node, mocha */
import Codegen from '../src/Codegen';
import assert from 'assert';

describe('Codegen', () => {
  const codegen = new Codegen(__dirname + '/openapi-petstore.json');

  it('should create a model given a path', () => {
    const res = codegen.createModel();
    // TODO make this less ridiculous
    assert.equal(Object.keys(res).length, 9);
  });
});
