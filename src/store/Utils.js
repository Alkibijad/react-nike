class Utils {
  static getCateries(state) {
    let source = new Set();
    state &&
      state.forEach((product) => {
        source.add(product.source);
      });

    return [...source];
  }
}

export default Utils;
