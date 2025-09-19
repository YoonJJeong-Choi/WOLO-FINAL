import React, { useMemo, useState } from 'react';
import { styled } from '@mui/material';
import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MediumButton from '../../../components/buttons/MediumButton.jsx';
import Table from '../../../components/table/Table.jsx';

const NotContainer = styled(Box)`
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

const notice = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const noticeData = [
    { writer: '아카자', question: '환불 정책은 어떻게 되나요?', hit: '12' },
    { writer: '아카자', question: '시스탱기 안디건...?', hit: '12' },
    { writer: '아카자', question: '시스템 이용 방법이 궁금합니다', hit: '12' },
    { writer: '아카자', question: '예약 취소는 어떻게 하나요?', hit: '12' },
    { writer: '아카자', question: '환불 정책은 어떻게 되나요?', hit: '12' },
    { writer: '아카자', question: '시스탱기 안디건...?', hit: '12' },
    { writer: '아카자', question: '시스템 이용 방법이 궁금합니다', hit: '12' },
    { writer: '아카자', question: '예약 취소는 어떻게 하나요?', hit: '12' },
    { writer: '아카자', question: '환불 정책은 어떻게 되나요?', hit: '12' },
    { writer: '아카자', question: '시스탱기 안디건...?', hit: '12' },
  ];

  const columns = useMemo(
    () => [
      { field: 'no', headerName: 'NO', width: 80 },
      { field: 'writer', headerName: '작성자', flex: 0.5, width: 120 },
      { field: 'question', headerName: '질문', flex: 1, minWidth: 260 },
      { field: 'hit', headerName: '조회수', minWidth: 80 },
    ],
    []
  );

  const count = Math.max(1, Math.ceil(noticeData.length / pageSize));
  const rowsWithNo = useMemo(() => {
    return noticeData.map((item, idx) => ({
      ...item,
      // DataGrid 고유 키(id)와 표시용 번호(no)를 분리
      id: idx + 1,
      no: idx + 1,
    }));
  }, [noticeData]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <NotContainer>
      <HeaderSection>
        <TitleSection>
          <Box>
            <MainTitle>공지사항</MainTitle>
          </Box>
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
      <BottomSection>
        <MediumButton
          buttonName="등록"
          buttonColor="#290661"
          hoverColor="#290661"
        />
      </BottomSection>
    </NotContainer>
  );
};

export default notice;
