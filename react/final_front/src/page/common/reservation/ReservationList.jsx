import React, { useMemo, useState } from 'react';
import { styled } from '@mui/material';
import { ButtonColor } from '../../../components/buttons/ButtonColor';
import ClearLargeButton from '../../../components/buttons/ClearLargeButton';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Page = styled('div')`
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
`;

const TopBar = styled('div')`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const TabGroup = styled('div')`
  display: flex;
  gap: 8px;
`;

const Grid = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled('div')`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
  }
`;

const ThumbBox = styled('div')`
  position: relative;
  width: 100%;
  padding-top: 62%;
  overflow: hidden;

  & img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardBody = styled('div')`
  padding: 14px 16px 16px;
`;

const LocationText = styled('div')`
  font-size: 12px;
  color: #7a7a7a;
  margin-bottom: 4px;
`;

const Title = styled('div')`
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin-bottom: 8px;
`;

const Price = styled('div')`
  font-size: 20px;
  font-weight: 800;
  color: #4a2db3;
  margin-bottom: 10px;
`;

const TagRow = styled('div')`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  & span {
    font-size: 12px;
    font-weight: 600;
    color: #7a3fe0;
    background: #f2eaff;
    padding: 6px 10px;
    border-radius: 999px;
  }
`;

const price = (n) => n.toLocaleString('ko-KR') + '원~';

function handleButton() {
  console.log('버튼클릭');
}

const ReservationList = () => {
  const [products] = useState([
    {
      id: 1,
      type: '숙소',
      title: '해남126 호텔',
      regionPath: '전라남도 / 해남군',
      price: 163000,
      hashtags: ['가족', '바다', '힐링', '자연'],
      img: 'https://images.unsplash.com/photo-1559599238-0f6ea1a6c936?q=80&w=1600&auto=format&fit=crop',
      popular: 92,
      reviews: 188,
      createdAt: '2025-06-01',
    },
    {
      id: 2,
      type: '패키지',
      title: '제주 플빌라스 워케이션 패키지',
      regionPath: '제주특별자치도 / 제주시',
      price: 216000,
      hashtags: ['가족', '단체', '풀빌라', '연인', '자연'],
      img: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1600&auto=format&fit=crop',
      popular: 87,
      reviews: 132,
      createdAt: '2025-05-22',
    },
    {
      id: 3,
      type: '숙소',
      title: '제주 마리보치 호텔',
      regionPath: '제주특별자치도 / 제주시',
      price: 125000,
      hashtags: ['바다', '자연', '가족', '노을'],
      img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop',
      popular: 71,
      reviews: 76,
      createdAt: '2025-04-11',
    },
    {
      id: 4,
      type: '패키지',
      title: '부산 오션뷰 워케이션 패키지',
      regionPath: '부산광역시 / 해운대구',
      price: 189000,
      hashtags: ['바다', '오피스', '카페', '장기'],
      img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2cb2?q=80&w=1600&auto=format&fit=crop',
      popular: 95,
      reviews: 245,
      createdAt: '2025-06-09',
    },
    {
      id: 5,
      type: '숙소',
      title: '강릉 포레스트 하우스',
      regionPath: '강원특별자치도 / 강릉시',
      price: 142000,
      hashtags: ['자연', '힐링', '트레킹'],
      img: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1600&auto=format&fit=crop',
      popular: 64,
      reviews: 58,
      createdAt: '2025-03-28',
    },
    {
      id: 6,
      type: '패키지',
      title: '여수 낭만 워케이션 패키지',
      regionPath: '전라남도 / 여수시',
      price: 174000,
      hashtags: ['바다', '야경', '연인'],
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
      popular: 78,
      reviews: 121,
      createdAt: '2025-05-05',
    },
  ]);

  // ---- UI states ----
  const [category, setCategory] = useState('전체'); // 전체 | 숙소 | 패키지 | 찜목록

  return (
    <Page>
      <TopBar>
        <TabGroup>
          <ClearLargeButton
            buttonName="전체"
            buttonColor={ButtonColor.user}
            func={() => setCategory('전체')}
            active={category === '전체'}
            icon={<ReorderOutlinedIcon />}
          />
          <ClearLargeButton
            buttonName="숙소"
            buttonColor={ButtonColor.user}
            func={() => setCategory('숙소')}
            active={category === '숙소'}
            icon={<OtherHousesOutlinedIcon />}
          />
          <ClearLargeButton
            buttonName="패키지"
            buttonColor={ButtonColor.user}
            func={() => setCategory('패키지')}
            active={category === '패키지'}
            icon={<ViewInArOutlinedIcon />}
          />
          <ClearLargeButton
            buttonName="찜목록"
            buttonColor={ButtonColor.user}
            func={() => setCategory('찜목록')}
            active={category === '찜목록'}
            icon={<FavoriteBorderOutlinedIcon />}
          />
        </TabGroup>
      </TopBar>

      <Grid>
        {products.map((p) => (
          <Card key={p.id}>
            <ThumbBox>
              <img src={p.img} alt={p.title} />
            </ThumbBox>
            <CardBody>
              <LocationText>{p.regionPath}</LocationText>
              <Title>{p.title}</Title>
              <Price>{price(p.price)}</Price>
              <TagRow>
                {p.hashtags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </TagRow>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Page>
  );
};

export default ReservationList;
