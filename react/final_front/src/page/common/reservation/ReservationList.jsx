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
import GridViewIcon from '@mui/icons-material/GridView';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import ProductGrid from './reservation-list-page/ProductGrid';
import FilterPanel from './reservation-list-page/FilterPanel';

const Page = styled('div')`
  width: 100%;
  padding: 48px 0px;
  box-sizing: border-box;
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
  cursor: pointer;
`;
const FilterItem = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
    gap: 10px;
  }
`;
const SearchGroup = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
`;

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
  const price = (n) => n.toLocaleString('ko-KR') + '원';
  const selectOptions = ['최신순', '오래된순', '리뷰 별점순', '리뷰 많은순'];
  const [category, setCategory] = useState('전체');
  const [filterOpen, setFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    regions: ['전국'],
    checkIn: null,
    checkOut: null,
    people: 0,
  });

  const getRegionSummary = (f) => {
    const hasCustom =
      f.regions && f.regions.length > 0 && !f.regions.includes('전국');
    return {
      text: hasCustom ? f.regions.join(', ') : '지역 선택',
      isPlaceholder: !hasCustom,
    };
  };

  const getDateSummary = (f) => {
    const hasBoth = f.checkIn && f.checkOut;
    return {
      text: hasBoth ? `${f.checkIn} ~ ${f.checkOut}` : '일정 선택',
      isPlaceholder: !hasBoth,
    };
  };

  const getPeopleSummary = (f) => {
    const hasPeople = (f.people ?? 0) > 0;
    return {
      text: hasPeople ? `${f.people} 명` : '인원 선택',
      isPlaceholder: !hasPeople,
    };
  };

  const { text: regionText, isPlaceholder: isRegionPH } =
    getRegionSummary(filters);
  const { text: dateText, isPlaceholder: isDatePH } = getDateSummary(filters);
  const { text: peopleText, isPlaceholder: isPeoplePH } =
    getPeopleSummary(filters);

  const summarySx = (isPH) => ({
    fontWeight: isPH ? 600 : 400,
    color: '#222',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  });

  const filtered = products.filter((p) => {
    // 예: 지역 필터
    const regionOk = filters.regions.includes('전국')
      ? true
      : filters.regions.some((r) => p.regionPath.includes(r));

    // 날짜/인원은 실제 재고/가용성 없으니 스킵(백엔드 연동 시 사용)
    return regionOk;
  });

  return (
    <Page>
      <FilterWrapper>
        <FilterGroup onClick={(e) => setFilterOpen(true)}>
          <FilterItem>
            <SearchOutlinedIcon sx={{ color: '#290661' }} />
            <span style={summarySx(isRegionPH)}>{regionText}</span>
          </FilterItem>

          <Divider orientation="vertical" flexItem />

          <FilterItem>
            <CalendarMonthOutlinedIcon sx={{ color: '#290661' }} />
            <span style={summarySx(isDatePH)}>{dateText}</span>
          </FilterItem>

          <Divider orientation="vertical" flexItem />

          <FilterItem>
            <PersonOutlineOutlinedIcon sx={{ color: '#290661' }} />
            <span style={summarySx(isPeoplePH)}>{peopleText}</span>
          </FilterItem>
        </FilterGroup>
      </FilterWrapper>

      <FilterPanel
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        value={filters}
        onApply={(next) => setFilters(next)}
        headerHeight={74}
      />

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
              color="user"
              label="정렬 기준"
              defaultValue="최신순"
              sx={{
                width: 200,
                '& .MuiInputBase-root': {
                  height: 48,
                },
                '& .MuiSelect-select': {
                  padding: '12px 14px',
                },
              }}
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
              color="user"
              sx={{
                width: 200,
                '& .MuiInputBase-root': {
                  height: 48,
                },
                '& .MuiInputLabel-root': {
                  top: -3,
                },
                '& .MuiInputLabel-shrink': {
                  top: 0,
                },
              }}
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
        <GridViewIcon /> 숙소
      </SectionTitle>
      <ProductGrid
        products={filtered.filter((p) => p.type === '숙소')}
        price={price}
      />

      <SectionTitle>
        <GridViewIcon /> 패키지
      </SectionTitle>
      <ProductGrid
        products={filtered.filter((p) => p.type === '패키지')}
        price={price}
      />
    </Page>
  );
};

export default ReservationList;
