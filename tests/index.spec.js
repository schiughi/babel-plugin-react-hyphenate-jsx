import { transform } from '@babel/core';
import fs from "fs";
import plugin from '../src';

const FIXTURES = "./tests/__fixtures__";

// specs
describe('babel-plugin-react-hyphenate-jsx', () => {
  it('should replace hyphen case args to camelCase in arrow function', () => {
    const example = fs.readFileSync(`${FIXTURES}/arrow-function.jsx`, 'utf8');
    const { code } = transform(example, {
      presets: ["@babel/preset-env","@babel/preset-react"],
      plugins: [plugin]
    });
    expect(code).toMatchSnapshot();
  });
  it('should replace hyphen case args to camelCase in class', () => {
    const example = fs.readFileSync(`${FIXTURES}/class-component.jsx`, 'utf8');
    const { code } = transform(example, {
      presets: ["@babel/preset-env","@babel/preset-react"],
      plugins: [plugin]
    });
    expect(code).toMatchSnapshot();
  });
});
