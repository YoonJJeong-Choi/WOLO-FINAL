import HostSubHeader from './HostSubHeader';
import StateTextFields from '../../../components/input/MediumInput';
import { styled } from '@mui/material/styles';

const HorizontalDiv = styled('div')`
  display: flex;
`;

const VerticalDiv = styled('div')`
  display: grid;
`;

const NomalPriceInsert = () => {
  return (
    <>
      <h1>기본 요금 관리</h1>
      <HostSubHeader />
      <VerticalDiv>
        <HorizontalDiv>
          <StateTextFields labelName={'숙소명'} id={'accommodationname'} />
          <button>객실조회</button>
        </HorizontalDiv>
        <HorizontalDiv>
          <StateTextFields labelName={'객실명'} id={'roomname'} />
          <StateTextFields labelName={'객실명'} id={'roomname'} />
          <StateTextFields labelName={'객실명'} id={'roomname'} />
          <StateTextFields labelName={'객실명'} id={'roomname'} />
        </HorizontalDiv>
      </VerticalDiv>
      <HorizontalDiv>
        <HorizontalDiv>
          <div>
            <p>요일별 가격</p>
            <StateTextFields labelName={'월 MON'} id={'mon'} />
            <StateTextFields labelName={'화 TUE'} id={'tue'} />
            <StateTextFields labelName={'수 WED'} id={'wed'} />
            <StateTextFields labelName={'목 THU'} id={'thu'} />
            <StateTextFields labelName={'금 FRI'} id={'fri'} />
            <StateTextFields labelName={'토 SAT'} id={'sat'} />
            <StateTextFields labelName={'일 SUN'} id={'sun'} />
            <StateTextFields labelName={'공휴일 HOLYDAY'} id={'hol'} />
          </div>
          <StateTextFields labelName={'전체 입력'} id={'allprice'} />
        </HorizontalDiv>

        <HorizontalDiv>
          <div>
            <p>1인 추가 요금</p>
            <StateTextFields labelName={'월 MON'} id={'mon'} />
            <StateTextFields labelName={'화 TUE'} id={'tue'} />
            <StateTextFields labelName={'수 WED'} id={'wed'} />
            <StateTextFields labelName={'목 THU'} id={'thu'} />
            <StateTextFields labelName={'금 FRI'} id={'fri'} />
            <StateTextFields labelName={'토 SAT'} id={'sat'} />
            <StateTextFields labelName={'일 SUN'} id={'sun'} />
            <StateTextFields labelName={'공휴일 HOLYDAY'} id={'hol'} />
          </div>
          <StateTextFields labelName={'전체 입력'} id={'allprice'} />
        </HorizontalDiv>
      </HorizontalDiv>
    </>
  );
};

export default NomalPriceInsert;
