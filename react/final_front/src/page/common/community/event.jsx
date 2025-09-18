import { useMemo, useState } from 'react';
import { styled } from '@mui/material';

// Styled Components
const Container = styled('div')({
  width: '100%',
  minHeight: '100vh',
  backgroundColor: 'white',
});

const Content = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2.5rem 1rem 2rem 1rem',
});

const TabContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
});

const TabButton = styled('button')(({ active }) => ({
  fontSize: '0.875rem',
  transition: 'color 0.2s',
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  color: active ? '#8b5cf6' : '#6b7280',
  fontWeight: active ? '600' : 'normal',
  '&:hover': {
    color: active ? '#7c3aed' : '#374151',
  },
}));

const HeaderSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1.1rem',
});

const SearchContainer = styled('div')({
  position: 'relative',
  width: '18rem',
});

const SearchInput = styled('input')({
  width: '80%',
  padding: '0.5rem 0.75rem',
  fontSize: '1',
  border: '1px solid #d1d5db',
  borderRadius: '0.375rem',
});

const Divider = styled('hr')({
  border: 'none',
  borderTop: '1px solid #e5e7eb',
  marginBottom: '1rem',
});

const CardsContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  width: '100%',
  '@media (max-width: 1024px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
  },
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gap: '1rem',
  },
});

const EventCard = styled('div')({
  width: '100%',
  background: 'white',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  transition: 'box-shadow 0.2s ease',

  '&:hover': {
    boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.15)',
  },
});

const CardImage = styled('div')({
  position: 'relative',
  width: '100%',
  aspectRatio: '16/9',
  overflow: 'hidden',
  backgroundColor: '#f3f4f6',
});

const CardImageElement = styled('img')({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
});

const CardContent = styled('div')({
  padding: '1rem',
});

const CardTitle = styled('h3')({
  fontSize: '0.875rem',
  fontWeight: '500',
  color: '#111827',
  marginBottom: '0.5rem',
});

const CardPeriod = styled('div')({
  fontSize: '0.75rem',
  color: '#6b7280',
  marginBottom: '0.75rem',
});

const StatusContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

const StatusText = styled('span')({
  fontSize: '0.75rem',
  fontWeight: '500',
  color: '#8b5cf6',
});

const RegisterSection = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '2rem',
});

const RegisterButton = styled('button')({
  backgroundColor: '#8b5cf6',
  color: 'white',
  fontWeight: '500',
  fontSize: '0.875rem',
  border: 'none',
  borderRadius: '0.375rem',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  '&:hover': {
    backgroundColor: '#7c3aed',
  },
});

const EmptyState = styled('div')({
  textAlign: 'center',
  padding: '3rem 0',
  color: '#6b7280',
  width: '100%',
});

const TABS = [
  { key: 'all', label: '전체 이벤트' },
  { key: 'ongoing', label: '행사중인 이벤트' },
  { key: 'ended', label: '종료된 이벤트' },
  { key: 'upcoming', label: '예정인 이벤트' },
];
//일단 데미데이터, 사진도 임의
const SAMPLE_EVENTS = [
  {
    id: 1,
    title: '9월 WOLO워케이션',
    startDate: '2025-09-01',
    endDate: '2025-09-30',
    status: 'ongoing',
    image:
      'https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: '9월 WOLO워케이션',
    startDate: '2025-09-01',
    endDate: '2025-09-30',
    status: 'ended',
    image:
      'https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: '11월 WOLO워케이션',
    startDate: '2025-11-01',
    endDate: '2025-12-30',
    status: 'upcoming',
    image:
      'https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Event() {
  const [activeTab, setActiveTab] = useState('all');
  const [query, setQuery] = useState('');
  const [events, setEvents] = useState(SAMPLE_EVENTS);

  const fmt = (iso) => {
    const d = new Date(iso);
    const yy = String(d.getFullYear()).slice(-2);
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yy}.${mm}.${dd}`;
  };

  const filtered = useMemo(() => {
    return events
      .filter((e) => (activeTab === 'all' ? true : e.status === activeTab))
      .filter((e) =>
        query.trim() === ''
          ? true
          : e.title.toLowerCase().includes(query.toLowerCase())
      );
  }, [events, activeTab, query]);

  return (
    <Container>
      <Content>
        <HeaderSection>
          <TabContainer>
            {TABS.map((t) => (
              <TabButton
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                active={activeTab === t.key}
              >
                {t.label}
              </TabButton>
            ))}
          </TabContainer>

          <SearchContainer>
            <SearchInput
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="검색어를 입력해주세요."
            />
          </SearchContainer>
        </HeaderSection>

        <Divider />

        <CardsContainer>
          {filtered.map((ev) => (
            <EventCardComponent key={ev.id} ev={ev} fmt={fmt} />
          ))}
        </CardsContainer>

        {/* <RegisterSection>
          <RegisterButton
            onClick={() => alert('등록 폼으로 이동 (라우팅 연결)')}
          >
            등록하기
          </RegisterButton>
        </RegisterSection> */}
      </Content>
    </Container>
  );
}

function EventCardComponent({ ev, fmt }) {
  const statusChip = {
    ongoing: {
      label: '진행',
    },
    ended: {
      label: '종료',
    },
    upcoming: {
      label: '예정',
    },
  }[ev.status];

  return (
    <EventCard>
      <CardImage>
        <CardImageElement src={ev.image} alt={ev.title} loading="lazy" />
      </CardImage>

      <CardContent>
        <CardTitle>{ev.title}</CardTitle>
        <CardPeriod>
          이벤트 기간: {fmt(ev.startDate)}-{fmt(ev.endDate)}
        </CardPeriod>
        <StatusContainer>
          <StatusText>{statusChip.label}</StatusText>
        </StatusContainer>
      </CardContent>
    </EventCard>
  );
}
