import { useState } from 'react';
import { styled } from '@mui/material';
import {
  ButtonColor,
  HoverColor,
} from '../../../components/buttons/ButtonColor';
import ClearLargeButton from '../../../components/buttons/ClearLargeButton';
import LargeButton from '../../../components/buttons/LargeButton';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Divider from '@mui/material/Divider';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Rating from '@mui/material/Rating';
import GridViewIcon from '@mui/icons-material/GridView';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Page = styled('div')`
  width: 100%;
  padding: 48px 0px;
  box-sizing: border-box;
`;

const TopBar = styled('div')`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

const TabGroup = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  & > div {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
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

const SectionTitle = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 700;
  margin: 32px 0 16px;
  color: #222;
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
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.36);
  }
`;

const ImgBox = styled('div')`
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

const DiscountPrice = styled('div')`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

const OriginalPrice = styled('span')`
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
`;

const FinalPrice = styled('span')`
  font-size: 20px;
  font-weight: 800;
  color: #4a2db3;
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

const ThumbBox = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -4px;
`;

const FilterWrapper = styled('div')`
  box-sizing: border-box;
  padding: 0px 200px 48px 200px;
`;

const FilterGroup = styled('div')`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 12px;
`;

const FilterItem = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  & > span {
    font-weight: 700;
  }
`;

const ReviewBox = styled('div')`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
`;

const ReviewText = styled('span')`
  font-size: 12px;
  color: #7a7a7a;
`;

const SearchGroup = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const price = (n) => n.toLocaleString('ko-KR') + '원';

function SearchList() {
  console.log('검색버튼 눌름~');
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
      img: 'https://media.istockphoto.com/id/1331465591/ko/%EC%82%AC%EC%A7%84/%EB%9F%AD%EC%85%94%EB%A6%AC-%ED%98%B8%ED%85%94-%EC%88%98%EC%98%81%EC%9E%A5%EC%9D%98-3d-%EB%A0%8C%EB%8D%94.jpg?s=612x612&w=0&k=20&c=A1aoAycupi8wYA2QDbo3F8_LvH3_6C3Chm00jaVjUsg=',
      reviews: 188,
      rating: 4.9,
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
      reviews: 132,
      rating: 4.8,
      createdAt: '2025-05-22',
      discount: 50000,
    },
    {
      id: 3,
      type: '숙소',
      title: '제주 마리보치 호텔',
      regionPath: '제주특별자치도 / 제주시',
      price: 125000,
      hashtags: ['바다', '자연', '가족', '노을'],
      img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop',
      reviews: 76,
      rating: 4.4,
      createdAt: '2025-04-11',
    },
    {
      id: 4,
      type: '패키지',
      title: '부산 오션뷰 워케이션 패키지',
      regionPath: '부산광역시 / 해운대구',
      price: 189000,
      hashtags: ['바다', '오피스', '카페', '장기'],
      img: 'https://i.namu.wiki/i/SJU_Jxqyocs1qbSa9Eh6N7Rlpi1luHi0yLmU19GbcUXa27Q-6snYSoHW0cxteDh-egtRiTkc_SgtJEE_bJcFxA.webp',
      reviews: 245,
      rating: 4.6,
      createdAt: '2025-06-09',
      discount: 60000,
    },
    {
      id: 5,
      type: '숙소',
      title: '강릉 포레스트 하우스',
      regionPath: '강원특별자치도 / 강릉시',
      price: 142000,
      hashtags: ['자연', '힐링', '트레킹'],
      img: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1600&auto=format&fit=crop',
      reviews: 58,
      rating: 4.5,
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
      reviews: 121,
      rating: 4.3,
      createdAt: '2025-05-05',
      discount: 80000,
    },
  ]);

  const [category, setCategory] = useState('전체'); // 전체 | 숙소 | 패키지 | 찜목록
  const selectOptions = ['최신순', '오래된순', '리뷰 별점순', '리뷰 많은순'];

  return (
    <Page>
      <FilterWrapper>
        <FilterGroup>
          <FilterItem>
            <SearchOutlinedIcon sx={{ color: '#290661' }} />
            <span>지역 선택</span>
          </FilterItem>
          <Divider orientation="vertical" flexItem />
          <FilterItem>
            <CalendarMonthOutlinedIcon sx={{ color: '#290661' }} />
            <span>일정 선택</span>
          </FilterItem>
          <Divider orientation="vertical" flexItem />
          <FilterItem>
            <PersonOutlineOutlinedIcon sx={{ color: '#290661' }} />
            <span>인원 선택</span>
          </FilterItem>
        </FilterGroup>
      </FilterWrapper>

      <TopBar>
        <TabGroup>
          <div>
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
          </div>
          <SearchGroup>
            <TextField
              id="outlined-select-currency"
              select
              label="정렬 기준"
              defaultValue="최신순"
            >
              {selectOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-basic"
              label="해시태그 검색"
              variant="outlined"
            />
            <LargeButton
              buttonColor={ButtonColor.user}
              hoverColor={HoverColor.user}
              buttonName={'검색'}
              func={SearchList}
              icon={<SearchOutlinedIcon />}
            >
              검색
            </LargeButton>
          </SearchGroup>
        </TabGroup>
      </TopBar>

      <SectionTitle>
        <GridViewIcon />
        숙소
      </SectionTitle>
      <Grid>
        {products
          .filter((p) => p.type === '숙소')
          .map((p) => (
            <Card key={p.id}>
              <ImgBox>
                <img src={p.img} alt={p.title} />
              </ImgBox>
              <CardBody>
                <ThumbBox>
                  <LocationText>{p.regionPath}</LocationText>
                  <FavoriteBorderOutlinedIcon />
                </ThumbBox>
                <Title>{p.title}</Title>
                <Price>{price(p.price)}~</Price>
                <ReviewBox>
                  <Rating
                    value={p.rating}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                  <ReviewText>({p.reviews} reviews)</ReviewText>
                </ReviewBox>
                <TagRow>
                  {p.hashtags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </TagRow>
              </CardBody>
            </Card>
          ))}
      </Grid>

      <SectionTitle>
        <GridViewIcon />
        패키지
      </SectionTitle>
      <Grid>
        {products
          .filter((p) => p.type === '패키지')
          .map((p) => (
            <Card key={p.id}>
              <ImgBox>
                <img src={p.img} alt={p.title} />
              </ImgBox>
              <CardBody>
                <ThumbBox>
                  <LocationText>{p.regionPath}</LocationText>
                  <FavoriteBorderOutlinedIcon />
                </ThumbBox>
                <Title>{p.title}</Title>
                {p.discount ? (
                  <DiscountPrice>
                    <OriginalPrice>{price(p.price)}</OriginalPrice>
                    <FinalPrice>{price(p.price - p.discount)}~</FinalPrice>
                  </DiscountPrice>
                ) : (
                  <Price>{price(p.price)}~</Price>
                )}
                <ReviewBox>
                  <Rating
                    value={p.rating}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                  <ReviewText>({p.reviews} reviews)</ReviewText>
                </ReviewBox>
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
