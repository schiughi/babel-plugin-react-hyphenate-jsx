# babel-plugin-react-hyphenate-jsx

## .babelrc

```json
{
  "presets": ["@babel/preset-env","@babel/preset-react"],
  "plugins": [
    // ...some plugins
    "babel-plugin-react-hyphenate-jsx",
  ]
}
```

## before

```jsx
const Button = ({ onClick, children }) => (
  <button
    on-click={onClick}
    class-name="button"
  >
    {children}
  </button>
);
```

## after

```jsx
const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="button"
  >
    {children}
  </button>
);
```