import React from 'react';
import { Provider } from './context';
import Index from './components/Index';
import Navbar from './components/layouts/Navbar';
import './App.css';
import './bootstrap.min.css';

function App(){
  return(
    <Provider>
      <Navbar />
      <Index/>
    </Provider>
  )
}

export default App;
