import React, { Component } from 'react';
import './App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logoicon from './logoicon.svg';
import Arrowdown from './arrow_down1.svg';


class App extends Component {
  render() {
    return (
      <div className="content">
        <header className="heading-container">
          <div>
            <p>how it works</p>
          </div>
        </header>
          <h2>
             <div> <img src={require('./logoicon.svg')} />
             </div>
          </h2>
        <body class="body-container">
          <div class="full-screen">
            <h1 class="main-text">This is some filler text</h1>
              <AnchorLink href='#content-container'>test</AnchorLink>
          </div>
          <div id="content-container" class="full-screen">
              <p>Here is some more filler text</p>
          </div>
        </body>
      </div>
    );
  }

}



export default App;
