import HostSubHeader from '../../../layouts/host/header/HostSubHeader';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import StatusToggle from '../../../components/filter/StatusToggle';
import { StatusColor } from '../../../components/filter/FilterColor';
import ClearButton from '../../../components/buttons/ClearMediumButton';
import { ButtonColor } from '../../../components/buttons/ButtonColor';
import DataTable from '../../../components/table/Table';

const columns = [
  { field: 'no', headerName: '번호', width: 80 },
  { field: 'accommodationName', headerName: '숙소명', flex: 1 },
  { field: 'accommodationType', headerName: '숙소 타입', flex: 1 },
  { field: 'createdAt', headerName: '등록일', flex: 1 },
  { field: 'status', headerName: '상태', flex: 1 },
];
const rows = [
  {
    id: 1,
    no: 1,
    accommodationName: '홍길동',
    accommodationType: 'zz',
    createdAt: '2025-09-19',
    status: '대기',
  },
  {
    id: 2,
    no: 2,
    accommodationName: '임꺽정',
    accommodationType: 'zz',
    createdAt: '2025-09-19',
    status: '대기',
  },
  {
    id: 3,
    no: 3,
    accommodationName: '이몽룡',
    accommodationType: 'zz',
    createdAt: '2025-09-19',
    status: '대기',
  },
  {
    id: 4,
    no: 4,
    accommodationName: '성춘향',
    accommodationType: 'zz',
    createdAt: '2025-09-19',
    status: '대기',
  },
  {
    id: 5,
    no: 5,
    accommodationName: '변학도',
    accommodationType: 'zz',
    createdAt: '2025-09-19',
    status: '대기',
  },
  {
    id: 6,
    no: 6,
    accommodationName: '장보고',
    accommodationType: 'zz',
    createdAt: '2025-09-19',
    status: '대기',
  },
];

// 메인
const MainDiv = styled('div')`
  background-color: white;
  border-radius: 5px;
  width: 90%;
  padding: 2%;
`;

// 가로정렬 , 양끝 정렬, 가로선 맞춤
const HorizontalDiv = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 2%; */
  /* margin: 2%; */
`;

// 세로정렬
const VerticalDiv = styled('div')`
  display: grid;
`;

const AccommodationList = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <HostSubHeader />
      <h1>숙소리스트</h1>
      <MainDiv>
        <HorizontalDiv>
          <StatusToggle backgroundColor={StatusColor.active} />
          <ClearButton buttonColor={ButtonColor.host} buttonName={'삭제'} />
        </HorizontalDiv>
        <br />
        <DataTable
          columns={columns} // 테이블 컬럼 정의
          rows={rows} // 전체 데이터
          page={page} // 현재 페이지 번호
          pagesize={5} // 한 페이지당 5개씩 보여주기
          onPageChange={setPage} // 페이지 변경 시 실행 (부모 state 변경)
          checkboxSelection={true} // 체크박스 컬럼 표시 여부 (false: 안 보임)
          sx={{ border: '1px solid #ddd' }} // 테이블 스타일
          paginationProps={{ color: 'primary', shape: 'rounded' }} // 페이지네이션 스타일
        />
      </MainDiv>
    </>
  );
};

export default AccommodationList;
