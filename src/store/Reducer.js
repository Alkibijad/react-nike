import API from "../services/ApiCall";
import Utils from "./Utils";

const Reducer = (state, action) => {
  switch (action.type) {
    case "set_initialState":
      return { ...state, product: action.payload };
    case "set_category":
      let category = Utils.getCateries(state.product);
      return { ...state, category: category };
    case "add_to_cart":
      let cart = Utils.checkIfProductInCart(state.inCart, action.payload);
      localStorage.setItem("cart", JSON.stringify(cart));
      return { ...state, inCart: cart };
    case "get_LocalStorage":
      let LSCart = JSON.parse(localStorage.getItem("cart"));
      if (!LSCart) {
        LSCart = []
       }
      return { ...state, inCart: LSCart };
    case "toggle_cart":
      return { ...state, toggleCart: action.payload };
    case "display_form":
      return { ...state, toggleSignUpForm: action.payload };
    case "changeAmount":
      state.inCart[action.payload.index].count += action.payload.value;
      if (state.inCart[action.payload.index].count < 1) {
        state.inCart.splice(action.payload.index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.inCart));
      return { ...state };
    case "checkout":
      console.log(state.inCart);
      API.setBought(state.inCart).then(response => { console.log(response); })
      break;

    default:
      return state;
  }
};

export default Reducer;
