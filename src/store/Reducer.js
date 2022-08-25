import Utils from "./Utils";

const Reducer = (state, action) => {
  switch (action.type) {
    case "set_initialState":
      return { ...state, product: action.payload };
    case "set_category":
      let category = Utils.getCateries(state.product);
      return { ...state, category: category };
    default:
      return state;
  }
};

export default Reducer;
