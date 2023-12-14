import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import SideBar from './SideBar';

function App() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header title="Header" />
          <div className="main-content">
            <SideBar title="SideBar" />
            <Content title="Content" />
          </div>
          <Footer title="Footer" />
        </div>
      </Provider>
    );
  }
  
  export default App;