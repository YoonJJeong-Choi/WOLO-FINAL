import { styled } from '@mui/material/styles';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import MuiLink from '@mui/material/Link';

const MainDiv = styled('div')`
  background-color: red;
`;
const StyleLink = styled(MuiLink)`
  text-decoration: none;
  justify-content: left;
  color: #6c757d;

  &.active {
    font-weight: bold;
    color: #561435;
    border-bottom: 2px solid #561435;
  }
`;

export default function HostSubHeader() {
  const location = useLocation();

  return (
    <>
      <div>
        <div
          style={{
            // backgroundColor: 'blue',
            display: 'flex',
            gap: '1rem',
            marginBottom: '1rem',
          }}
        >
          <StyleLink
            component={RouterLink}
            to='/host/accommodation'
            className={
              location.pathname === '/host/accommodation' ? 'active' : ''
            }
          >
            숙소 관리
          </StyleLink>
          <StyleLink
            component={RouterLink}
            to='/host/accommodation/normalprice'
            className={
              location.pathname.startsWith('/host/accommodation/normalprice')
                ? 'active'
                : ''
            }
          >
            기본 요금 관리
          </StyleLink>
          <StyleLink
            component={RouterLink}
            to='/host/accommodation/specialprice'
            className={
              location.pathname.startsWith('/host/accommodation/specialprice')
                ? 'active'
                : ''
            }
          >
            예외 요금 관리
          </StyleLink>
        </div>
      </div>

      <Outlet />
    </>
  );
}
