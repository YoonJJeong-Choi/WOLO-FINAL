import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

// 공통 테이블 컴포넌트
export default function Table({
  //  기본 컬럼 정의 (props로 교체 가능)
  columns = [
    { field: 'no', headerName: 'NO', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ],

  // 기본 행 데이터
  rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ],

  //  페이징 제어 props
  page = 1, // 현재 페이지 (1-base)
  pagesize = 5,
  count, // 총 페이지 수
  onPageChange, // 페이지 변경 이벤트

  //  UI 관련 props
  checkboxSelection = true, // 체크박스 선택 여부
  hideFooter = true, // DataGrid footer 숨김 (외부 Pagination만 사용)

  //  스타일 props
  sx,

  //  Pagination에 직접 전달할 추가 props (색상, 모양 등)
  paginationProps,
}) {
  // count가 있으면 그 값 사용, 없으면 rows.length 기준으로 자동 계산
  const totalPages = count ?? Math.max(1, Math.ceil(rows.length / pagesize));

  //  예: page=2, pagesize=5 → rows.slice(5,10)
  const start = (page - 1) * pagesize;
  const pagedRows = rows.slice(start, start + pagesize);

  return (
    <>
      {/* 테이블 본문 */}
      <Paper sx={{ width: '100%' }}>
        <DataGrid
          autoHeight // 데이터 개수에 맞춰 높이 자동 조절
          pagination={false} // DataGrid 자체 pagination 끔
          rows={pagedRows} // 잘라낸 현재 페이지 데이터만 전달
          columns={columns} // 테이블 컬럼 정의
          checkboxSelection={checkboxSelection} // 체크박스 표시 여부
          sx={{ border: 0, ...sx }} // border 제거 + 사용자 스타일 적용
          hideFooter={hideFooter} // DataGrid footer 숨김
        />
      </Paper>

      {/* 외부 페이지네이션 */}
      <Stack
        spacing={2}
        mt={2}
        direction="row"
        justifyContent="center" // 가로 가운데 정렬
        alignItems="center" // 세로 가운데 정렬
      >
        <Pagination
          page={page} // 현재 페이지
          count={totalPages} // 총 페이지 수
          onChange={(_, p) => onPageChange?.(p)} // 페이지 변경 시 부모로 전달
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item} // ← 이전/다음 아이콘 적용
            />
          )}
          {...paginationProps} // 외부에서 커스터마이징 props 주입
        />
      </Stack>
    </>
  );
}
/* -> 이거 가져가 쓰셈
// 1) 부모 컴포넌트에서 페이지 상태 만들기
const [page, setPage] = useState(1);

// 2) 실제 데이터와 컬럼 정의 (예시는 간단히 작성)
const columns = [
  { field: 'no', headerName: '번호', width: 80 },
  { field: 'name', headerName: '이름', flex: 1 },
];
const rows = [
  { id: 1, no: 1, name: '홍길동' },
  { id: 2, no: 2, name: '임꺽정' },
  { id: 3, no: 3, name: '이몽룡' },
  { id: 4, no: 4, name: '성춘향' },
  { id: 5, no: 5, name: '변학도' },
  { id: 6, no: 6, name: '장보고' },
];
// 3) 공통 Table 컴포넌트 사용
  return (
    <Table
    columns={columns}       // 테이블 컬럼 정의
    rows={rows}             // 전체 데이터
    page={page}             // 현재 페이지 번호
    pagesize={5}            // 한 페이지당 5개씩 보여주기
    onPageChange={setPage}  // 페이지 변경 시 실행 (부모 state 변경)
    checkboxSelection={false} // 체크박스 컬럼 표시 여부 (false: 안 보임)
    sx={{ border: '1px solid #ddd' }} // 테이블 스타일
    paginationProps={{ color: 'primary', shape: 'rounded' }} // 페이지네이션 스타일
  />
);
  */
