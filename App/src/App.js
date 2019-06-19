import React, { Component } from 'react';
import { Page } from 'react-onsenui';
import './App.css';
import MyTabbar from './components/MyTabbar';

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <Page
      renderToolbar={() => <MyTabbar  />}
            >
        
      </Page>
    );
  }
}

export default App;
