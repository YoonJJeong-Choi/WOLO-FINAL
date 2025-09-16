import React from 'react';
import { styled } from '@mui/material';
import CommonHeader from './header/CommonHeader';
import Footer from './footer/Footer';
import { Routes, Route } from 'react-router-dom';
import About from '../../page/about';
import Region from '../../page/region';

const CommonGrid = styled('div')`
  width: 100%;
  min-height: 100dvh;
  display: grid;
  grid-template-rows: 74px 1fr 425px;
  grid-template-columns: 1fr;
`;

const MainWrapper = styled('main')`
  width: 100%;
  height: auto;
  background-color: #fcfcfc;
`;

const MainInner = styled('div')`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 clamp(16px, 5vw, 300px);
`;

const CommonMainLayout = () => {
  return (
    <>
      <CommonGrid>
        <CommonHeader />
        <MainWrapper>
          <MainInner>
            <Routes>
              <Route path="/" element={<h1>메인 홈페이지</h1>} />
              <Route path="/explore/about" element={<About />} />
              <Route path="/explore/region" element={<Region />} />
            </Routes>
          </MainInner>
        </MainWrapper>
        <Footer />
      </CommonGrid>
    </>
  );
};

export default CommonMainLayout;
