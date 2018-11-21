import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
import Page1 from '../../pages/page-1';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  text-align: left;
  display: block;
  width: 100%;
  a{
    text-align: center;
    /* This renders the buttons above... Edit me! */
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
  }
`


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <header className="App-header">
            <Nav>
              <Link to="home">home</Link>
              <Link to="page-1">Page 1</Link>
            </Nav>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
          <div>
            <Route path={"/home"} render={() => <div>wellcome home !</div>} />
            <Route path={"/page-1"} component={Page1} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
