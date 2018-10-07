export default () => {  
  return {
    visitor: {
      JSXIdentifier(path) {
        const name = path.node.name;
        path.node.name = name.replace(/-([a-z])/g, (g) => (g[1].toUpperCase()));
      }
    }
  }
}
