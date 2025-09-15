import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { Link, useLocation } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

import logo from '../../../../public/wolo_f0f0f0.png';

const SidebarWrapper = styled('aside')`
  height: 100%;
  background-color: #561435;
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10px;
  transition: all 0.3s ease;
`;

const SidebarContent = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Divider = styled('div')`
  width: 100%;
  height: 1px;
  background-color: #78435d;
  margin-top: auto;
`;

const BaseItem = styled(Link, {
  shouldForwardProp: (prop) => !['isOpen', 'active'].includes(prop),
})`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  color: ${({ active }) => (active ? '#f0f0f0' : '#aaa')};
  background: ${({ active }) => (active ? '#78435d' : 'transparent')};
  border-radius: ${({ active }) => (active ? '8px' : '0')};
  transition: all 0.2s ease;

  &:hover {
    background: #78435d;
    color: #f0f0f0;
    border-radius: 8px;
  }

  & svg {
    color: inherit;
    flex-shrink: 0;
  }

  & span {
    color: inherit;
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.3s ease;
  }
`;

const SubMenu = styled(BaseItem)`
  height: 40px;
  justify-content: ${({ isOpen }) => (isOpen ? 'flex-start' : 'center')};
  padding: ${({ isOpen }) => (isOpen ? '0 0 0 60px' : '0')};

  & svg {
    font-size: 20px;
  }

  & span {
    margin-left: ${({ isOpen }) => (isOpen ? '8px' : '0')};
    display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
    transition: opacity 0.3s ease, max-width 0.3s ease;
  }
`;

const MenuItem = styled(BaseItem)`
  height: 60px;
  justify-content: flex-start;
  padding: 0 18px;

  & svg {
    font-size: 24px;
  }

  & span {
    margin-left: 10px;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    max-width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    overflow: hidden;
    transition: opacity 0.3s ease, max-width 0.3s ease;
  }
`;

const SidebarFooter = styled('div')`
  width: 100%;
  margin: 20px 0;
  height: 60px;
  padding: 0 18px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #aaa;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background: #78435d;
    color: #f0f0f0;
  }

  & svg {
    font-size: 24px;
    flex-shrink: 0;
  }

  & span {
    margin-left: 10px;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    max-width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    overflow: hidden;
    white-space: nowrap;
    transition: opacity 0.3s ease, max-width 0.3s ease;
  }
`;

const ToggleButton = styled('button')`
  width: 60px;
  height: 60px;
  background: #561435;
  border: none;
  cursor: pointer;
  color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: #78435d;
    color: #f0f0f0;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const LogoImg = styled('img')`
  width: ${({ isOpen }) => (isOpen ? '150px' : '0px')};
  height: 62px;
  cursor: default;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.3s ease;
  overflow: hidden;
`;

const SideBarBox = styled('div')`
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: ${({ isOpen }) => (isOpen ? 'space-between' : 'center')};
  align-items: center;
`;

const FacilityWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border-radius: 8px;
  transition: all 0.2s ease;

  & > div:first-of-type svg,
  & > div:first-of-type span {
    color: #aaa;
  }

  &:hover {
    background: #78435d;

    & > div:first-of-type svg,
    & > div:first-of-type span {
      color: #f0f0f0;
    }
  }
`;

const FacilityMain = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 18px;
  box-sizing: border-box;
  cursor: default;

  & svg {
    font-size: 24px;
    color: #aaa;
  }

  & span {
    margin-left: 10px;
    color: #aaa;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    max-width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    overflow: hidden;
    white-space: nowrap;
    transition: opacity 0.3s ease, max-width 0.3s ease;
  }
`;

const FacilitySub = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function handleLogout() {
  console.log('로그아웃');
}

const HostSidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  return (
    <SidebarWrapper>
      <SideBarBox isOpen={isOpen}>
        <LogoImg src={logo} alt="로고" isOpen={isOpen} />
        <ToggleButton onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </ToggleButton>
      </SideBarBox>

      <SidebarContent>
        <MenuItem
          to="/host/dashboard"
          isOpen={isOpen}
          active={location.pathname === '/host/dashboard'}
        >
          <BubbleChartOutlinedIcon />
          <span>대시보드</span>
        </MenuItem>
        <FacilityWrapper>
          <FacilityMain isOpen={isOpen}>
            <ApartmentOutlinedIcon />
            <span>내 시설 관리</span>
          </FacilityMain>
          <FacilitySub>
            <Tooltip
              title="숙소"
              placement="right"
              disableHoverListener={isOpen}
            >
              <SubMenu
                to="/host/accommodation"
                isOpen={isOpen}
                active={location.pathname === '/host/accommodation'}
              >
                <HotelOutlinedIcon />
                <span>숙소</span>
              </SubMenu>
            </Tooltip>

            <Tooltip
              title="오피스"
              placement="right"
              disableHoverListener={isOpen}
            >
              <SubMenu
                to="/host/office"
                isOpen={isOpen}
                active={location.pathname === '/host/office'}
              >
                <BusinessOutlinedIcon />
                <span>오피스</span>
              </SubMenu>
            </Tooltip>

            <Tooltip
              title="액티비티"
              placement="right"
              disableHoverListener={isOpen}
            >
              <SubMenu
                to="/host/activity"
                isOpen={isOpen}
                active={location.pathname === '/host/activity'}
              >
                <SportsEsportsOutlinedIcon />
                <span>액티비티</span>
              </SubMenu>
            </Tooltip>
          </FacilitySub>
        </FacilityWrapper>

        <MenuItem
          to="/host/reservation"
          isOpen={isOpen}
          active={location.pathname === '/host/reservation'}
        >
          <FlightTakeoffOutlinedIcon />
          <span>예약관리</span>
        </MenuItem>

        <MenuItem
          to="/host/apply"
          isOpen={isOpen}
          active={location.pathname === '/host/apply'}
        >
          <StorefrontOutlinedIcon />
          <span>예약상품 신청</span>
        </MenuItem>
      </SidebarContent>

      <Divider />
      <SidebarFooter isOpen={isOpen} onClick={handleLogout}>
        <LogoutIcon />
        <span>로그아웃</span>
      </SidebarFooter>
    </SidebarWrapper>
  );
};

export default HostSidebar;
