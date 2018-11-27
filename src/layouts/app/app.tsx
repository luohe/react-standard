import React, { Component } from 'react';
import logo from './logo.svg';
import './app.css';
import Wrapper from '../../pages/page-1';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import { LoadingContext, LoadingState } from '../../contexts/loding';
import { Loading } from '../../components/loading';
import { withContext } from '../../contexts';

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

const RootStyle = styled.div`
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 5vmin;
}

.App-header {
  background-color: #282c34;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
}

`;

class App extends Component<LoadingState> {
  render() {
    return (
      <RootStyle>
        <BrowserRouter>
          <div className="App">
            {this.props.isShow ? <div className="loading"><Loading /></div> : ""}
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
              <Route path={"/page-1"} component={Wrapper} />
            </div>
          </div>
        </BrowserRouter>
      </RootStyle>
    );
  }
}

export default withContext(LoadingContext)(App);
