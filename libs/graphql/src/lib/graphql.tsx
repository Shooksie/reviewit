import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GraphqlProps {}

const StyledGraphql = styled.div`
  color: pink;
`;

export function Graphql(props: GraphqlProps) {
  return (
    <StyledGraphql>
      <h1>Welcome to graphql!</h1>
    </StyledGraphql>
  );
}

export default Graphql;
