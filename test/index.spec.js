
import { transform } from '@babel/core'
import vm from 'vm'
import util from "util";
import plugin from '../src'

// specs
describe('babel-plugin-example', () => {
  it('should be replaced camelCase if hyphen-case in JSX', () => {
    const result = transform(`
    import React from "react";
    ({ onSubmit }) => (<button on-click={onSubmit}>submit</button>);
    `, {
      presets: ["@babel/preset-env","@babel/preset-react"],
      plugins: [plugin]
    });
    const returnValue = vm.runInNewContext(result.code, {
      require: (name) => require(name)
    });
    expect(util.inspect(returnValue({ onSubmit(){} })))
      .toEqual(`{ '$$typeof': Symbol(react.element),
  type: 'button',
  key: null,
  ref: null,
  props: { onClick: [Function: onSubmit], children: 'submit' },
  _owner: null,
  _store: {} }`)
  })
})
