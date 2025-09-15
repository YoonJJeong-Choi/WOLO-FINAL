import React from 'react';
import { styled } from '@mui/material';

const HostHeaderWrapper = styled('header')`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 300px 6fr 1fr;
  grid-template-rows: 1fr;
`;

const HostHeader = () => {
  return (
    <>
      <HostHeaderWrapper>header</HostHeaderWrapper>
    </>
  );
};

export default HostHeader;
