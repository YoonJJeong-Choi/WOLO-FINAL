import React from 'react';
import { styled } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link, NavLink, useLocation } from 'react-router-dom';

const HeaderWrapper = styled('header')`
  width: 100%;
  background: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const HeaderInner = styled('div')`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 clamp(0px, 5vw, 300px);
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
  align-items: center;
  height: 73px;
`;

const LogoImg = styled('img')`
  width: 120px;
  height: 48px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const UserBoxWrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  & > div {
    color: #212529;
    font-weight: 700;
    font-size: 1em;
  }
`;

const UserBox = styled(NavLink)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #212529;
  font-weight: 700;
  font-size: 1em;
`;

const Nav = styled('nav')`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  position: relative;
  & > a {
    font-size: 1.1em;
  }
  & > div {
    font-size: 1.1em;
  }
`;

const NavItem = styled('div')`
  font-weight: 600;
  color: #212529;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    color: #9477c2;
  }

  &:hover > div {
    display: flex;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    width: 100%;
    height: 3px;
    background-color: #290661;
    border-radius: 2px;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
  &.active::after {
    transform: translateX(-50%) scaleX(1);
  }
`;

const Dropdown = styled('div')`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #eee;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: none;
  flex-direction: column;
  min-width: 180px;
  z-index: 999;
  border-radius: 4px;
`;

const DropdownItem = styled(Link)`
  padding: 12px 16px;
  font-size: 0.95em;
  color: #212529;
  text-decoration: none;
  transition: background 0.2s;
  &:hover {
    color: #9477c2;
  }
`;

const DirectLink = styled(NavLink)`
  font-weight: 600;
  color: #212529;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  &:hover {
    color: #9477c2;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    width: 100%;
    height: 3px;
    background-color: #290661;
    border-radius: 2px;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
  &.active::after {
    transform: translateX(-50%) scaleX(1);
  }
`;
const CommonHeader = () => {
  const location = useLocation();
  const isExploreActive = location.pathname.startsWith('/explore');
  const isCommunityActive = location.pathname.startsWith('/community');

  return (
    <HeaderWrapper>
      <HeaderInner>
        <div>
          <Link to="/">
            <LogoImg src="/wolo_logo_290661.png" alt="로고" />
          </Link>
        </div>
        <Nav>
          <NavItem className={isExploreActive ? 'active' : ''}>
            둘러보기
            <Dropdown>
              <DropdownItem to="/explore/region">지역소개</DropdownItem>
              <DropdownItem to="/explore/about">About</DropdownItem>
              <DropdownItem to="/explore/faq">FAQ</DropdownItem>
            </Dropdown>
          </NavItem>
          <NavItem className={isCommunityActive ? 'active' : ''}>
            커뮤니티
            <Dropdown>
              <DropdownItem to="/community/notice">공지사항</DropdownItem>
              <DropdownItem to="/community/event">이벤트</DropdownItem>
              <DropdownItem to="/community/board">게시판</DropdownItem>
            </Dropdown>
          </NavItem>
          <DirectLink to="/reservation/list">예약하기</DirectLink>
          <DirectLink to="/company/price">기업 전용 요금제</DirectLink>
          <DirectLink to="/host/application">제휴신청</DirectLink>
        </Nav>
        <UserBoxWrapper>
          <UserBox to="/member/mypage">
            <AccountCircleOutlinedIcon
              sx={{ fontSize: 35, color: '#212529' }}
            />
            <div>Guest</div>
          </UserBox>
        </UserBoxWrapper>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default CommonHeader;
