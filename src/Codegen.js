/* @flow */
import fs from 'fs';

export default class Codegen {
  jsonPath: string;

  constructor(jsonPath: string):void {
    this.jsonPath = jsonPath;
  }

  createModel(): Object {
    return JSON.parse(fs.readFileSync(this.jsonPath, 'utf8'));
  }
}
