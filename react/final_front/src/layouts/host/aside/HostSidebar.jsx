import React from 'react';
import { styled } from '@mui/material';

const HostSidebarWrapper = styled('aside')`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid black;
  padding: 25px 16px;
  padding-bottom: 33px;
`;

const HostSidebar = () => {
  return (
    <>
      <HostSidebarWrapper>aside</HostSidebarWrapper>
    </>
  );
};

export default HostSidebar;
