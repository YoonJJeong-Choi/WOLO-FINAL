import React from 'react';
import LargeButton from '../../../components/buttons/LargeButton';
import MediumInput from '../../../components/input/MediumInput';
import DateInput from '../../../components/input/DateInput';
import { styled } from '@mui/material/styles';
import TimeInput from '../../../components/input/TimeInput';
import SelectInput from '../../../components/input/SelectIput';
import { InputColor } from '../../../components/input/InputColor';
import {
  ButtonColor,
  HoverColor,
} from '../../../components/buttons/ButtonColor';

// 가로
const HorizontalDiv = styled('div')`
  display: grid;
`;

// 세로
const VerticalDiv = styled('div')`
  display: flex;
`;

const AccommodationDetail = () => {
  return (
    <>
      <h1>숙소 상세 보기</h1>
      <div>
        <VerticalDiv>
          <HorizontalDiv>
            <MediumInput labelName={'숙소명'} color={InputColor.host} />
            <MediumInput labelName={'주소'} color={InputColor.host} />
            <TimeInput />
            <TimeInput />
            <MediumInput labelName={'사진업로드'} color={InputColor.host} />
            <SelectInput labelName={'상태'} color={InputColor.host} />
            <MediumInput labelName={'숙소 소개'} color={InputColor.host} />
          </HorizontalDiv>

          <HorizontalDiv>
            <SelectInput labelName={'숙소타입'} color={InputColor.host} />
          </HorizontalDiv>

          <HorizontalDiv>
            <DateInput />
            <DateInput />
            <div>미리보기</div>
          </HorizontalDiv>
        </VerticalDiv>

        <div>
          <LargeButton
            buttonName={'등록'}
            buttonColor={ButtonColor.host}
            hoverColor={HoverColor.host}
          />
          <LargeButton
            buttonName={'취소'}
            buttonColor={ButtonColor.host}
            hoverColor={HoverColor.host}
          />
        </div>
      </div>
    </>
  );
};

export default AccommodationDetail;
