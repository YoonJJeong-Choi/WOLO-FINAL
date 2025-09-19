import React from 'react';
import { styled } from '@mui/material';
import CommonHeader from './header/CommonHeader';
import Footer from './footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Region from '../../page/common/explore/Region';
import About from '../../page/common/explore/about';
import ReservationList from '../../page/common/reservation/ReservationList';
import Privacy from '../../page/common/info/Privacy';
import Terms from '../../page/common/info/Terms';
import ScrollUp from '../../components/util/ScrollUp';
import Event from '../../page/common/community/event';
import Faq from '../../page/common/explore/faq';
import Board from '../../page/common/community/board';
import Notice from '../../page/common/community/notice';
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
        <ScrollUp />
        <CommonHeader />
        <MainWrapper>
          <MainInner>
            <Routes>
              <Route path="/" element={<h1>메인 홈페이지</h1>} />

              <Route path="/explore/about" element={<About />} />
              <Route path="/explore/region" element={<Region />} />
              <Route path="/explore/faq" element={<Faq />} />
              <Route path="/community/event" element={<Event />} />
              <Route path="/community/board" element={<Board />} />
              <Route path="/community/notice" element={<Notice />} />
              <Route path="/reservation/list" element={<ReservationList />} />
              <Route path="/info/privacy" element={<Privacy />} />
              <Route path="/info/terms" element={<Terms />} />
            </Routes>
          </MainInner>
        </MainWrapper>
        <Footer />
      </CommonGrid>
    </>
  );
};

export default CommonMainLayout;
