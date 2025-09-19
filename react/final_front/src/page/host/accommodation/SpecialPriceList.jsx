import HostSubHeader from '../../../layouts/host/header/HostSubHeader';
import LargeButton from '../../../components/buttons/LargeButton';
import {
  ButtonColor,
  HoverColor,
} from '../../../components/buttons/ButtonColor';
import { useNavigate } from 'react-router-dom';

const SpecialPriceList = () => {
  const navigate = useNavigate();

  const navigateSpecialPrice = () => {
    navigate('/host/accommodation/specialprice/insert');
  };
  return (
    <>
      <div>
        <HostSubHeader />
        <h1>예외 요금 관리</h1>
        <LargeButton
          buttonName={'추가'}
          buttonColor={ButtonColor.host}
          hoverColor={HoverColor.host}
          func={navigateSpecialPrice}
        />
      </div>
    </>
  );
};

export default SpecialPriceList;
