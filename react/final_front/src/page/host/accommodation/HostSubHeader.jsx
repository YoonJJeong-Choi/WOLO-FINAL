import { Link, Outlet, useLocation } from 'react-router-dom';

export default function HostSubHeader() {
  const location = useLocation();

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Link
          to='/host/accommodation'
          style={{
            fontWeight: location.pathname.startsWith('/host/accommodation')
              ? 'bold'
              : 'normal',
          }}
        >
          숙소 관리
        </Link>
        <Link
          to='/host/accommodation/nomalprice'
          style={{
            fontWeight: location.pathname.startsWith('/host/nomalprice')
              ? 'bold'
              : 'normal',
          }}
        >
          기본 요금 관리
        </Link>
        <Link
          to='/host/accommodation/specialprice'
          style={{
            fontWeight: location.pathname.startsWith('/host/specialprice')
              ? 'bold'
              : 'normal',
          }}
        >
          예외 요금 관리
        </Link>
      </div>

      <Outlet />
    </div>
  );
}
