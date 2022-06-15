import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
//BrowserRouter vs HashRouter
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Reset } from "styled-reset";

import store from "./component/reducer/store.js";

const persistor = persistStore(store);
console.log(persistor);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Reset />
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
