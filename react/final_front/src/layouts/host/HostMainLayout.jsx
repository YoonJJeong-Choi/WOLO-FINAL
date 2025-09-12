import React from 'react';
import HostHeader from './header/HostHeader';
import HostSidebar from './aside/HostSidebar';
import { styled } from '@mui/material';

const HostGrid = styled('div')`
  width: 100%;
  min-height: 100dvh;
  display: grid;
  grid-template-rows: 74px 1fr;
  grid-template-columns: 1fr;
`;

const SideMainWrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
`;

const HostMainWrapper = styled('main')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HostMainLayout = () => {
  return (
    <>
      <HostGrid>
        <HostHeader />
        <SideMainWrapper>
          <HostSidebar />
          <HostMainWrapper>main</HostMainWrapper>
        </SideMainWrapper>
      </HostGrid>
    </>
  );
};

export default HostMainLayout;
