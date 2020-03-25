import React, { Component } from 'react';
import { Provider } from './context';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/Index';
import Navbar from './components/layouts/Navbar';
import './App.css';
import './bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <Provider>
        {/* <Router> */}
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Index/>
            </div>
          </React.Fragment>
        {/* </Router> */}
      </Provider>
    );
  }
}

export default App;
