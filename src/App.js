
import './App.css';

import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Pharmacy Premier soin</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
