import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import storageSession from 'redux-persist/lib/storage/session';
import {combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import {persistReducer, persistStore} from "redux-persist";
import {Provider} from "react-redux";

//redux
const persistConFig = {
    key : 'root',
    storage: storageSession
}

const rootReducer = combineReducers({
    auth: authReducer()
    });

const persistedReducer = persistReducer(persistConFig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </PersistGate>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
