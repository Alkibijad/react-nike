class Utils {
  static getCateries(state) {
    let source = new Set();
    state &&
      state.forEach((product) => {
        source.add(product.source);
      });

    return [...source];
  }
  static checkIfProductInCart(cart, product) {

    if (cart.length === 0) {
      cart = []
     }
    let indexInCart = null;
    let foundedProduct = cart.find((el, index) => {
      indexInCart = index;
      return el.id === product.id;
    });

    if (foundedProduct) {
      cart[indexInCart].count++;
      cart[indexInCart].total = cart[indexInCart].count * cart[indexInCart].price;

    } else {
      product.count = 1;
      product.total = product.price
      cart.push(product);
    }
    return [...cart];
  }
}

export default Utils;
