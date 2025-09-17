import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const StyledH3 = styled('h3')`
  color: #561435;
`;
const MainDivOne = styled('div')`
  display: grid;
  grid-template-rows: 2fr 1fr;
  align-items: center;
`;

const MainDivTwo = styled('div')`
  display: grid;
  grid-template-rows: 2fr 1fr;
  align-items: center;
`;

const AllMainDiv = styled('div')`
  display: flex;
  align-items: center;
  /* background-color: rebeccapurple; */
`;

const ChangeDiv = styled('div')`
  background-color: #ccc0cc;
  border-radius: 5px;
`;

const HorizontalDiv = styled('div')`
  display: grid;
  justify-items: end;
  align-items: flex-end;
`;

const VerticalDiv = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  p {
    margin: 0%;
  }
`;
const VerticalDivTwo = styled('div')`
  display: flex;
  width: 100%;
  /* justify-content: space-between; */
  p {
    margin: 0%;
  }
  color: #561435;
`;

const VerticalDivThree = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  /* justify-content: space-between; */
  p {
    margin: 0%;
  }
`;

const StyledDivFir = styled('div')`
  box-sizing: border-box;
  background-color: #fafafa;
  width: 90%;
  height: 80%;
  border-radius: 11px;
  padding: 5%;
  margin-left: 5%;
  overflow: auto;
`;
const StyledDivFirst = styled('div')`
  box-sizing: border-box;
  background-color: #fafafa;
  width: 90%;
  height: 80%;
  border-radius: 11px;
  padding: 5%;
  margin-right: 5%;
  overflow: auto;
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

const StyledDivSecon = styled('div')`
  display: flex;
  width: 90%;
  margin-left: 5%;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
`;
const StyledDivSecond = styled('div')`
  display: flex;
  width: 90%;
  margin-right: 5%;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
`;

const SubStyledDiv = styled('div')`
  background-color: #fafafa;
  width: 40%;
  height: 35%;
  border-radius: 11px;
  padding: 5%;
  display: grid;
`;

const StyledP = styled('span')`
  font-size: xx-large;
`;

const StyledButton = styled('button')`
  border: 0px;
  background-color: transparent;
`;

const DashBoard = () => {
  return (
    <>
      <AllMainDiv>
        <MainDivOne>
          <StyledDivFir>
            <VerticalDiv>
              <StyledH3>예약관리</StyledH3>
              <HorizontalDiv>
                <VerticalDivThree>
                  <StyledButton>
                    더보기
                    <ChevronRightIcon />
                  </StyledButton>
                </VerticalDivThree>
                <ChangeDiv>
                  <p>예약대기 3</p>
                </ChangeDiv>
              </HorizontalDiv>
            </VerticalDiv>
            <StyleTable>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>숙소명</th>
                  <th>예약번호</th>
                  <th>예약상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5</td>
                  <td>국비호텔</td>
                  <td>wores100</td>
                  <td>대기 </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>국비호텔</td>
                  <td>wores100</td>
                  <td>대기</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>국비호텔</td>
                  <td>wores100</td>
                  <td>대기</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>국비호텔</td>
                  <td>wores100</td>
                  <td>대기</td>
                </tr>
              </tbody>
            </StyleTable>
          </StyledDivFir>

          <StyledDivSecon>
            <SubStyledDiv>
              <p>국비호텔</p>
              <StyledH3>이번 달 예약자 수</StyledH3>
              <VerticalDivThree>
                <StyledP>809</StyledP>
                <PeopleAltIcon />
              </VerticalDivThree>
              <VerticalDivTwo>
                <TrendingUpIcon />
                +11
              </VerticalDivTwo>
            </SubStyledDiv>
            <SubStyledDiv>
              <p>재혁민박</p>
              <StyledH3>이번 달 예약자 수</StyledH3>
              <VerticalDivThree>
                <StyledP>809</StyledP>
                <PeopleAltIcon />
              </VerticalDivThree>
              <VerticalDivTwo>
                <TrendingUpIcon />
                +11
              </VerticalDivTwo>
            </SubStyledDiv>
          </StyledDivSecon>
        </MainDivOne>
        <MainDivTwo>
          <StyledDivFirst>
            <VerticalDiv>
              <StyledH3>상품관리</StyledH3>
              <HorizontalDiv>
                <StyledButton>더보기</StyledButton>
                <ChangeDiv>
                  <p>예약대기 3</p>
                </ChangeDiv>
              </HorizontalDiv>
            </VerticalDiv>
            <StyleTable>
              <thead>
                <tr>
                  <th>번호</th>
                  <th>숙소명</th>
                  <th>예약번호</th>
                  <th>예약상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5</td>
                  <td>국비호텔</td>
                  <td>wores100</td>
                  <td>대기</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>국비호텔</td>
                  <td>wores100</td>
                  <td>대기</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>국비호텔</td>
                  <td>wores100</td>
                  <td>대기</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>국비호텔</td>
                  <td>wores100</td>
                  <td>대기</td>
                </tr>
              </tbody>
            </StyleTable>
          </StyledDivFirst>
          <StyledDivSecond>
            <SubStyledDiv>
              <p>국비호텔</p>
              <StyledH3>이번 달 리뷰 평점</StyledH3>
              <VerticalDivThree>
                <StyledP>4.5</StyledP>
                <StarIcon />
              </VerticalDivThree>
              <VerticalDivTwo>
                <TrendingUpIcon />
                +11
              </VerticalDivTwo>
            </SubStyledDiv>
            <SubStyledDiv>
              <p>재혁민박</p>
              <StyledH3>이번 달 리뷰 평점</StyledH3>
              <VerticalDivThree>
                <StyledP>4.5</StyledP>
                <StarIcon />
              </VerticalDivThree>
              <VerticalDivTwo>
                <TrendingUpIcon />
                +11
              </VerticalDivTwo>
            </SubStyledDiv>
          </StyledDivSecond>
        </MainDivTwo>
      </AllMainDiv>
    </>
  );
};
export default DashBoard;
