import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducers from "./reducers/reducer";
import { persistStore, persistReducer } from 'redux-persist'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { AppContainer } from "../src/containers/AppContainer"
import "./styles.css";
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

// const store = createStore(
//   rootReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const persistConfig = { key: 'root', storage }
const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = createStore( persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const persistor = persistStore(store)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppContainer />
    </PersistGate>
    </Provider>
  </BrowserRouter>,
  rootElement
);
