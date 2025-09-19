import HostSubHeader from '../../../layouts/host/header/HostSubHeader';
import { styled } from '@mui/material/styles';
import Filter from '../../../components/filter/Filter';
import Toggle from '../../../components/filter/Toggle';
import {
  FilterColor,
  ToggleHoverColor,
} from '../../../components/filter/FilterColor';
import ClearButton from '../../../components/buttons/ClearSmallButton';
import SamllButton from '../../../components/buttons/SmallButton';
import {
  ButtonColor,
  HoverColor,
} from '../../../components/buttons/ButtonColor';
import { InputColor } from '../../../components/input/InputColor';
import DataTable from '../../../components/table/Table';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
// 메인
const MainDiv = styled('div')`
  background-color: white;
  border-radius: 5px;
  width: 90%;
`;
// 테이블
const StyleTable = styled('table')`
  width: 100%;
  height: 40%;
  table-layout: fixed;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid #ccc;
  }

  th,
  td {
    height: 60px;
    text-align: center;
  }
`;
// 가로정렬
const HorizontalDiv = styled('div')`
  display: flex;
`;

// 세로정렬
const VerticalDiv = styled('div')`
  display: grid;
`;

const AccommodationList = () => {
  return (
    <>
      <HorizontalDiv>
        <Toggle
          backgroundColor={FilterColor.host}
          hoverColor={ToggleHoverColor.host}
        />
        <Filter color={FilterColor.host} labelName={'정렬'} />
      </HorizontalDiv>
      <DataTable />
      <HostSubHeader />
      <h1>숙소리스트</h1>
      <MainDiv>
        <HorizontalDiv>
          <SamllButton
            buttonColor={ButtonColor.host}
            hoverColor={HoverColor.host}
            buttonName={'필터'}
            icon={<FilterAltIcon />}
          />
          <button>여기 필터링 자리임</button>
          <ClearButton buttonColor={ButtonColor.host} buttonName={'삭제'} />
        </HorizontalDiv>
        <StyleTable>
          <thead>
            <tr>
              <th>
                <input type='checkbox' name='all' id='all' />
              </th>
              <th>번호</th>
              <th>숙소명</th>
              <th>숙소 타입</th>
              <th>등록일</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type='checkbox' />
              </td>
              <td>5</td>
              <td>국비호텔</td>
              <td>호텔</td>
              <td>2025-09-16</td>
              <td>대기 </td>
            </tr>
            <tr>
              <td>
                <input type='checkbox' />
              </td>
              <td>5</td>
              <td>국비호텔</td>
              <td>호텔</td>
              <td>2025-09-16</td>
              <td>대기 </td>
            </tr>
            <tr>
              <td>
                <input type='checkbox' />
              </td>
              <td>5</td>
              <td>국비호텔</td>
              <td>호텔</td>
              <td>2025-09-16</td>
              <td>대기 </td>
            </tr>
            <tr>
              <td>
                <input type='checkbox' />
              </td>
              <td>5</td>
              <td>국비호텔</td>
              <td>호텔</td>
              <td>2025-09-16</td>
              <td>대기 </td>
            </tr>
            <tr>
              <td>
                <input type='checkbox' />
              </td>
              <td>5</td>
              <td>국비호텔</td>
              <td>호텔</td>
              <td>2025-09-16</td>
              <td>대기 </td>
            </tr>
          </tbody>
        </StyleTable>
      </MainDiv>
    </>
  );
};

export default AccommodationList;
