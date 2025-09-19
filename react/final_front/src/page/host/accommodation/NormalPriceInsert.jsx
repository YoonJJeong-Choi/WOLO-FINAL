import HostSubHeader from '../../../layouts/host/header/HostSubHeader';
import MediumInput from '../../../components/input/MediumInput';
import PriceInput from '../../../components/input/PriceInput';
import SelectInput from '../../../components/input/SelectIput';
import { InputColor } from '../../../components/input/InputColor';
import { styled } from '@mui/material/styles';
import LargeButton from '../../../components/buttons/LargeButton';
import { ButtonColor } from '../../../components/buttons/ButtonColor';

const HorizontalDiv = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const HorizontalDivTwo = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

const HorizontalDivFive = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const HorizontalDivThree = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VerticalDiv = styled('div')`
  display: grid;
`;

const WrapDiv = styled('div')`
  background-color: #f0f0f0;
  margin: 2%;
  padding: 2%;
  border-radius: 11px;
`;

const MainDiv = styled('div')`
  background-color: white;
  border-radius: 11px;
  width: 90%;
  height: auto;
  /* padding: 2%; */
`;

const ButtonDiv = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 2%;
`;

const NormalPriceInsert = () => {
  return (
    <>
      <HostSubHeader />
      <h1>기본 요금 관리</h1>
      <MainDiv>
        <VerticalDiv>
          <HorizontalDivThree>
            <SelectInput
              labelName={'숙소명'}
              id={'accommodation'}
              color={InputColor.host}
              // helperText={'숙소를 먼저 선택하세요'}
            />
            {/* <MediumInput
              labelName={'숙소명'}
              id={'accommodationname'}
              color={InputColor.host}
            /> */}
            <LargeButton
              buttonColor={ButtonColor.host}
              hoverColor={ButtonColor.host}
              buttonName={'객실조회'}
            />
          </HorizontalDivThree>
          <WrapDiv>
            <HorizontalDivTwo>
              <HorizontalDiv>
                <MediumInput
                  labelName={'객실명'}
                  id={'roomname'}
                  color={InputColor.host}
                />
              </HorizontalDiv>
              <MediumInput
                labelName={'객실명'}
                id={'roomname'}
                color={InputColor.host}
              />
              <MediumInput
                labelName={'객실명'}
                id={'roomname'}
                color={InputColor.host}
              />
              <MediumInput
                labelName={'객실명'}
                id={'roomname'}
                color={InputColor.host}
              />
            </HorizontalDivTwo>
          </WrapDiv>
        </VerticalDiv>
        <br />
        {/* 기본 요금  */}
        <HorizontalDivFive>
          <WrapDiv>
            <HorizontalDiv>
              <div>
                <p>요일별 가격</p>
                <PriceInput
                  labelName={'월 MON'}
                  id={'mon'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'화 TUE'}
                  id={'tue'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'수 WED'}
                  id={'wed'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'목 THU'}
                  id={'thu'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'금 FRI'}
                  id={'fri'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'토 SAT'}
                  id={'sat'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'일 SUN'}
                  id={'sun'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'공휴일 HOLIDAY'}
                  id={'hol'}
                  color={InputColor.host}
                />
              </div>
              <PriceInput
                labelName={'전체 입력'}
                id={'allprice'}
                color={InputColor.host}
              />
            </HorizontalDiv>
          </WrapDiv>
          {/* 1인 추가 요금 */}
          <WrapDiv>
            <HorizontalDiv>
              <div>
                <p>1인 추가 요금</p>
                <PriceInput
                  labelName={'월 MON'}
                  id={'mon'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'화 TUE'}
                  id={'tue'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'수 WED'}
                  id={'wed'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'목 THU'}
                  id={'thu'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'금 FRI'}
                  id={'fri'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'토 SAT'}
                  id={'sat'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'일 SUN'}
                  id={'sun'}
                  color={InputColor.host}
                />
                <PriceInput
                  labelName={'공휴일 HOLIDAY'}
                  id={'hol'}
                  color={InputColor.host}
                />
              </div>
              <PriceInput
                labelName={'전체 입력'}
                id={'allprice'}
                color={InputColor.host}
              />
            </HorizontalDiv>
          </WrapDiv>
        </HorizontalDivFive>
        <ButtonDiv>
          <LargeButton
            buttonColor={ButtonColor.host}
            hoverColor={ButtonColor.host}
            buttonName={'수정'}
          />
        </ButtonDiv>
      </MainDiv>
    </>
  );
};

export default NormalPriceInsert;
