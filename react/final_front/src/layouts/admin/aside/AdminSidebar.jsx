import React from 'react';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import Face2OutlinedIcon from '@mui/icons-material/Face2Outlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

const SidebarWrapper = styled('aside')`
  height: 100%;
  background-color: #052c65;
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
  background-color: #33507a;
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
  background: ${({ active }) => (active ? '#33507a' : 'transparent')};
  border-radius: ${({ active }) => (active ? '8px' : '0')};
  transition: all 0.2s ease;

  &:hover {
    background: #33507a;
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
    background: #33507a;
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
  background: #052c65;
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
    background: #33507a;
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

function handleLogout() {
  console.log('로그아웃');
}

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  return (
    <SidebarWrapper>
      <SideBarBox isOpen={isOpen}>
        <LogoImg src="/wolo_f0f0f0.png" alt="로고" isOpen={isOpen} />
        <ToggleButton onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </ToggleButton>
      </SideBarBox>

      <SidebarContent>
        <MenuItem
          to="/admin/dashboard"
          isOpen={isOpen}
          active={location.pathname.startsWith('/admin/dashboard')}
        >
          <BubbleChartOutlinedIcon />
          <span>대시보드</span>
        </MenuItem>

        <MenuItem
          to="/admin/community"
          isOpen={isOpen}
          active={location.pathname.startsWith('/admin/community')}
        >
          <Face2OutlinedIcon />
          <span>커뮤니티</span>
        </MenuItem>

        <MenuItem
          to="/admin/account"
          isOpen={isOpen}
          active={location.pathname.startsWith('/admin/account')}
        >
          <SwitchAccountOutlinedIcon />
          <span>계정 관리</span>
        </MenuItem>

        <MenuItem
          to="/admin/reservation"
          isOpen={isOpen}
          active={location.pathname.startsWith('/admin/reservation')}
        >
          <EventAvailableOutlinedIcon />
          <span>예약 관리</span>
        </MenuItem>

        <MenuItem
          to="/admin/product"
          isOpen={isOpen}
          active={location.pathname.startsWith('/admin/product')}
        >
          <ShoppingBagOutlinedIcon />
          <span>상품 관리</span>
        </MenuItem>

        <MenuItem
          to="/admin/payment"
          isOpen={isOpen}
          active={location.pathname.startsWith('/admin/payment')}
        >
          <CreditCardOutlinedIcon />
          <span>결제 상태 관리</span>
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

export default AdminSidebar;
