import React from 'react';
import { styled } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNone';

const HeaderWrapper = styled('header')`
  width: 100%;
  height: 74px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  box-sizing: border-box;
`;

const TitleBox = styled('div')`
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 20px;
    font-weight: 600;
    color: #0c0c0c;
    margin: 0;
  }

  & span {
    font-size: 13px;
    color: #777;
  }
`;

const RightBox = styled('div')`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NotifyIcon = styled(NotificationsNoneOutlinedIcon)`
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #561435;
  }
`;

const ProfileWrapper = styled('div')`
  position: relative;
  display: inline-block;
  height: 100%;
  &:hover .dropdown {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

const ProfileBox = styled('div')`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Avatar = styled('div')`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #561435;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const UserInfo = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & strong {
    font-size: 14px;
    color: #333;
  }

  & span {
    font-size: 12px;
    color: #777;
  }
`;

const DropdownMenu = styled('div')`
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  padding-top: 8px;

  display: flex;
  flex-direction: column;

  opacity: 0;
  transform: translateY(-5px);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 999;
`;

const DropdownItem = styled(Link)`
  padding: 10px 16px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  text-decoration: none;
  display: block;

  &:hover {
    background: #f5f5f5;
  }

  &.signout {
    color: red;
  }
`;

const pageTitles = {
  '/host/dashboard': 'Dashboard',
  '/host/accommodation': 'Accommodation',
  '/host/office': 'Office',
  '/host/activity': 'Activity',
  '/host/reservation': 'Reservation',
  '/host/apply': 'Application',
};

function handleLogout() {
  console.log('로그아웃');
}

const HostHeader = () => {
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'Dashboard';

  return (
    <HeaderWrapper>
      <TitleBox>
        <h1>{title}</h1>
        <span>호스트 전용 페이지</span>
      </TitleBox>
      <RightBox>
        <NotifyIcon />
        <ProfileWrapper>
          <ProfileBox>
            <Avatar>H</Avatar>
            <UserInfo>
              <strong>UserId01</strong>
              <span>Host</span>
            </UserInfo>
          </ProfileBox>
          <DropdownMenu className="dropdown">
            <DropdownItem to="/host/mypage">Mypage</DropdownItem>
            <DropdownItem as="div" className="signout" onClick={handleLogout}>
              Sign Out
            </DropdownItem>
          </DropdownMenu>
        </ProfileWrapper>
      </RightBox>
    </HeaderWrapper>
  );
};

export default HostHeader;
