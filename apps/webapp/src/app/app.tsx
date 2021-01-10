import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { CreateReviewPage } from '@reviewit/pages';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
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
      <StyledApp>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
        </Navbar>
        <CreateReviewPage />
      </StyledApp>
    </ApolloProvider>
  );
}

export default App;