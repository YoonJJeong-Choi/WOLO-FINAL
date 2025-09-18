import React from 'react';
import HostSubHeader from '../../../layouts/host/header/HostSubHeader';
import MediumInput from '../../../components/input/MediumInput';
import DateInput from '../../../components/input/DateInput';
import NumInput from '../../../components/input/NumberInput';
import SelectInput from '../../../components/input/SelectIput';
import { InputColor } from '../../../components/input/InputColor';
import { styled } from '@mui/material/styles';
import LargeButton from '../../../components/buttons/LargeButton';
import {
  ButtonColor,
  HoverColor,
} from '../../../components/buttons/ButtonColor';

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
  gap: 4%;
`;

const SpecialPriceInsert = () => {
  return (
    <>
      <HostSubHeader />
      <h1>예외 요금 관리 추가</h1>
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
          <br />

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
        <WrapDiv>
          <HorizontalDivTwo>
            <MediumInput
              labelName={'예외 가격 요금명'}
              color={InputColor.host}
            />
            <HorizontalDivThree>
              <p>시작일</p>
              <DateInput color={InputColor.host} />
            </HorizontalDivThree>

            <HorizontalDivThree>
              <p>종료일</p>
              <DateInput color={InputColor.host} />
            </HorizontalDivThree>
          </HorizontalDivTwo>
        </WrapDiv>
        <br />
        <HorizontalDivFive>
          <WrapDiv>
            <HorizontalDiv>
              <div>
                <p>요일별 가격</p>
                <NumInput
                  labelName={'월 MON'}
                  id={'mon'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'화 TUE'}
                  id={'tue'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'수 WED'}
                  id={'wed'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'목 THU'}
                  id={'thu'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'금 FRI'}
                  id={'fri'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'토 SAT'}
                  id={'sat'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'일 SUN'}
                  id={'sun'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'공휴일 HOLIDAY'}
                  id={'hol'}
                  color={InputColor.host}
                />
              </div>
              <NumInput
                labelName={'전체 입력'}
                id={'allprice'}
                color={InputColor.host}
              />
            </HorizontalDiv>
          </WrapDiv>

          <WrapDiv>
            <HorizontalDiv>
              <div>
                <p>1인 추가 요금</p>
                <NumInput
                  labelName={'월 MON'}
                  id={'mon'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'화 TUE'}
                  id={'tue'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'수 WED'}
                  id={'wed'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'목 THU'}
                  id={'thu'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'금 FRI'}
                  id={'fri'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'토 SAT'}
                  id={'sat'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'일 SUN'}
                  id={'sun'}
                  color={InputColor.host}
                />
                <NumInput
                  labelName={'공휴일 HOLIDAY'}
                  id={'hol'}
                  color={InputColor.host}
                />
              </div>
              <NumInput
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
            hoverColor={HoverColor.host}
            buttonName={'추가'}
          />

          <LargeButton
            buttonColor={ButtonColor.host}
            hoverColor={HoverColor.host}
            buttonName={'취소'}
          />
        </ButtonDiv>
      </MainDiv>
    </>
  );
};

export default SpecialPriceInsert;
