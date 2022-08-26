import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const Context = createContext();
const initialState = {
  product: [],
  category: [],
  inCart: [],
  boutght: [],
  toggleCart: false,
  toggleSignUpForm: false,
  login: {
    loggedIn: false,
    signUp: false,
  },
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    dispatch({ type: "set_category", payload: state });
  }, [state.product]);

  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </>
  );
};

export default Context;
