import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';

import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { CreateReviewPage } from '@reviewit/pages';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:8087/v1/graphql',
  cache: new InMemoryCache(),
});

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StyledApp>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
          </Navbar>
          <Switch>
            <Route path="/new">
              <CreateReviewPage />
            </Route>
            <Route path="/users">
              <div />
            </Route>
            <Route path="/">
              <div />
            </Route>
          </Switch>
        </StyledApp>
      </Router>
    </ApolloProvider>
  );
}

export default App;
