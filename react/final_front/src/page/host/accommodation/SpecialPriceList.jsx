import HostSubHeader from '../../../layouts/host/header/HostSubHeader';
import MediumButton from '../../../components/buttons/MediumButton';
import {
  ButtonColor,
  HoverColor,
} from '../../../components/buttons/ButtonColor';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Filter from '../../../components/filter/Filter';
import Toggle from '../../../components/filter/Toggle';
import {
  FilterColor,
  ToggleHoverColor,
} from '../../../components/filter/FilterColor';
import ClearButton from '../../../components/buttons/ClearMediumButton';
import DataTable from '../../../components/table/Table';
import { useState } from 'react';

const columns = [
  { field: 'no', headerName: '번호', width: 80 },
  { field: 'specialPriceTitle', headerName: '요금명', flex: 1 },
  { field: 'specialStartDate', headerName: '시작일', flex: 1 },
  { field: 'specialEndDate', headerName: '종료일', flex: 1 },
];
const rows = [
  {
    id: 1,
    no: 1,
    specialPriceTitle: '홍길동',
    specialStartDate: '2025-09-19',
    specialEndDate: '2025-09-19',
  },
  {
    id: 2,
    no: 2,
    specialPriceTitle: '임꺽정',
    specialStartDate: '2025-09-19',
    specialEndDate: '2025-09-19',
  },
  {
    id: 3,
    no: 3,
    specialPriceTitle: '이몽룡',
    specialStartDate: '2025-09-19',
    specialEndDate: '2025-09-19',
  },
  {
    id: 4,
    no: 4,
    specialPriceTitle: '성춘향',
    specialStartDate: '2025-09-19',
    specialEndDate: '2025-09-19',
  },
  {
    id: 5,
    no: 5,
    specialPriceTitle: '변학도',
    specialStartDate: '2025-09-19',
    specialEndDate: '2025-09-19',
  },
  {
    id: 6,
    no: 6,
    specialPriceTitle: '장보고',
    specialStartDate: '2025-09-19',
    specialEndDate: '2025-09-19',
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

const SpecialPriceList = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const navigateSpecialPrice = () => {
    navigate('/host/accommodation/specialprice/insert');
  };
  return (
    <>
      <HostSubHeader />
      <h1>예외 요금 관리</h1>
      <MainDiv>
        <HorizontalDiv>
          <Filter />
          <Toggle
            backgroundColor={FilterColor.host}
            hoverColor={ToggleHoverColor.host}
          />
          <MediumButton
            buttonName={'추가'}
            buttonColor={ButtonColor.host}
            hoverColor={HoverColor.host}
            func={navigateSpecialPrice}
          />
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

export default SpecialPriceList;
