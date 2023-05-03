module.exports = function ({ types: t }) {
  return {
    visitor: {
      Literal(path) {
        // path.replaceWith(t.stringLiteral("Hello World!"));
        const newValue = path.node.extra.rawValue + "💩";
        path.replaceWith(t.stringLiteral(newValue));
        path.skip();
      },
    },
  };
};
