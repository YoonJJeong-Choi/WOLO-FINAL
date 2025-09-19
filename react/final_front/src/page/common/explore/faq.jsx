import React, { useMemo, useState } from 'react';
import { styled } from '@mui/material';
import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MediumButton from '../../../components/buttons/MediumButton.jsx';
import Table from '../../../components/table/Table.jsx';

const FAQContainer = styled(Box)`
  padding: 24px;
  background-color: #ffffff;
  min-height: 100vh;
`;

const HeaderSection = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const TitleSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MainTitle = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
  margin: 0;
`;

const CategoryTabs = styled(Box)`
  display: flex;
  gap: 8px;
`;

const SearchSection = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 40px; /* 카테고리 탭 높이에 맞춰 아래로 내림 */
`;

const SearchInput = styled(Box)`
  position: relative;
  width: 200px;
`;

const SearchIconWrapper = styled(Box)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #666666;
  pointer-events: none;
`;

const BottomSection = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 24px;
`;

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const categories = ['전체', '시스템', '제휴', '제약'];

  const faqData = [
    { id: '1', question: '시스템 이용 방법이 궁금합니다' },
    { id: '2', question: '예약 취소는 어떻게 하나요?' },
    { id: '3', question: '결제 방법은 어떤 것들이 있나요?' },
    { id: '4', question: '환불 정책은 어떻게 되나요?' },
    { id: '5', question: '시스탱기 안디건...?' },
    { id: '6', question: '시스템 이용 방법이 궁금합니다' },
    { id: '7', question: '예약 취소는 어떻게 하나요?' },
    { id: '8', question: '결제 방법은 어떤 것들이 있나요?' },
    { id: '9', question: '환불 정책은 어떻게 되나요?' },
    { id: '10', question: '시스탱기 안디건...?' },
    { id: '11', question: '시스템 이용 방법이 궁금합니다' },
    { id: '12', question: '예약 취소는 어떻게 하나요?' },
    { id: '13', question: '결제 방법은 어떤 것들이 있나요?' },
    { id: '14', question: '환불 정책은 어떻게 되나요?' },
    { id: '15', question: '시스탱기 안디건...?' },
  ];

  const columns = useMemo(
    () => [
      { field: 'no', headerName: 'NO', width: 80 },
      { field: 'id', headerName: 'ID', width: 120 },
      { field: 'question', headerName: '질문', flex: 1, minWidth: 260 },
    ],
    []
  );

  const count = Math.max(1, Math.ceil(faqData.length / pageSize));
  const rowsWithNo = useMemo(() => {
    return faqData.map((item, idx) => ({
      ...item,
      // 전체 기준 번호 부여
      no: idx + 1,
    }));
  }, [faqData]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <FAQContainer>
      <HeaderSection>
        <TitleSection>
          <Box>
            <MainTitle>FAQ</MainTitle>
          </Box>
          <CategoryTabs>
            {categories.map((category) => (
              <MediumButton
                key={category}
                buttonName={category}
                buttonColor={
                  selectedCategory === category ? '#290661' : '#290661'
                }
                hoverColor={
                  selectedCategory === category ? '#1B0547' : '#1B0547'
                }
                func={() => handleCategoryChange(category)}
              />
            ))}
          </CategoryTabs>
        </TitleSection>

        <SearchSection>
          <SearchInput>
            <input
              type="text"
              placeholder=""
              style={{
                width: '80%',
                height: '30px',
                border: '1px solid #290661',
                borderRadius: '4px',
                padding: '0 30px 0 9px',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <SearchIconWrapper>
              <SearchIcon fontSize="small" />
            </SearchIconWrapper>
          </SearchInput>
        </SearchSection>
      </HeaderSection>
      <Table
        columns={columns}
        rows={rowsWithNo}
        page={currentPage}
        count={count}
        pagesize={pageSize}
        onPageChange={handlePageChange}
        height={422}
        checkboxSelection={false}
        hideFooter
        sx={{ border: 0 }}
      />
      {/* <BottomSection>
        <MediumButton
          buttonName="등록"
          buttonColor="#290661"
          hoverColor="#290661"
        />
      </BottomSection> */}
    </FAQContainer>
  );
};

export default FAQ;
