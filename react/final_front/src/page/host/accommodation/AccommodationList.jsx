import HostSubHeader from './HostSubHeader';
import { styled } from '@mui/material/styles';

const MainDiv = styled('div')`
  background-color: white;
  border-radius: 5px;
  width: 90%;
`;
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
const AccommodationList = () => {
  return (
    <>
      <HostSubHeader />
      <h1>숙소리스트</h1>
      <MainDiv>
        <div>
          <button>여기 필터링 자리임</button>
          <button>삭제</button>
        </div>
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
