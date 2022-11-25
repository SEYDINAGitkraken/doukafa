import React from 'react';
import createRoot from 'react-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/createStore';
import {PersistGate} from "redux-persist/integration/react";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/app.scss';
const Loading =()=>{
  return (
    <div>loading...</div>
  )
}

createRoot.render(
  <React.StrictMode>
      <Provider store={store} >
        <PersistGate loading={<Loading />} persistor= {persistor}>
          <App/>
        </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
