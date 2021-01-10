import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PagesProps {}

const StyledPages = styled.div`
  color: pink;
`;

export function Pages(props: PagesProps) {
  return (
    <StyledPages>
      <h1>Welcome to pages!</h1>
    </StyledPages>
  );
}

export default Pages;
