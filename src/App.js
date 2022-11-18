//router
import Router from './Router';
import {BrowserRouter} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter className="App">
      <Router/>
    </BrowserRouter>
  );
}

export default App;
