import React, { useState } from 'react';
import HostHeader from './header/HostHeader';
import HostSidebar from './aside/HostSidebar';
import { styled } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

const LayoutWrapper = styled('div')`
  width: 100%;
  background-color: #e9e9e9;
`;

const SidebarWrapper = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? '300px' : '80px')};
  transition: width 0.3s ease;
  z-index: 1000;
`;

const HeaderWrapper = styled('div')`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '300px' : '80px')};
  right: 0;
  height: 74px;
  background: #fff;
  z-index: 1000;
  transition: left 0.3s ease, width 0.3s ease;
`;

const MainWrapper = styled('main')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ isOpen }) => (isOpen ? '300px' : '80px')};
  margin-top: 74px;
  padding: 24px;
  background: #e9e9e9;
  min-height: calc(100vh - 74px);
  width: calc(100% - ${({ isOpen }) => (isOpen ? '300px' : '80px')});
  box-sizing: border-box;
  transition: margin-left 0.3s ease, width 0.3s ease;
`;

const HostMainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <LayoutWrapper>
      <SidebarWrapper isOpen={isOpen}>
        <HostSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </SidebarWrapper>
      <HeaderWrapper isOpen={isOpen}>
        <HostHeader />
      </HeaderWrapper>
      <MainWrapper isOpen={isOpen}>
        <Routes>
          <Route path="/host/dashboard" element={<h1>대시보드</h1>} />
          <Route path="/host/accommodation" element={<h1>숙소 관리</h1>} />
          <Route path="/host/office" element={<h1>오피스 관리</h1>} />
          <Route path="/host/activity" element={<h1>액티비티 관리</h1>} />
          <Route path="/host/reservation" element={<h1>예약 관리</h1>} />
          <Route path="/host/apply" element={<h1>예약상품 신청</h1>} />
          <Route path="/host/mypage" element={<h1>마이페이지</h1>} />
          <Route path="*" element={<h1>페이지를 찾을 수 없습니다</h1>} />
        </Routes>
      </MainWrapper>
    </LayoutWrapper>
  );
};

export default HostMainLayout;
