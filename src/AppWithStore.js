import React from "react";
import App from "./App";
import reducers from "./components/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithStore;
