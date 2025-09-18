import { useMemo, useState, useEffect } from 'react';
import {
  Drawer,
  Box,
  IconButton,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  TextField,
  Typography,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import CalendarRange from './CalendarRange';

const REGIONS = [
  '전국',
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '세종',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
];

export default function FilterPanel({ open, onClose, value, onApply }) {
  const [regions, setRegions] = useState(value?.regions ?? ['전국']);
  const [checkIn, setCheckIn] = useState(value?.checkIn ?? null);
  const [checkOut, setCheckOut] = useState(value?.checkOut ?? null);
  const [people, setPeople] = useState(value?.people ?? 0);

  useEffect(() => {
    if (!open) return;
    setRegions(value?.regions ?? ['전국']);
    setCheckIn(value?.checkIn ?? null);
    setCheckOut(value?.checkOut ?? null);
    setPeople(value?.people ?? 0);
  }, [open]);

  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const toggleRegion = (r) => {
    setRegions((prev) => {
      if (r === '전국') return ['전국'];
      const next = prev.includes(r)
        ? prev.filter((x) => x !== r)
        : [...prev.filter((x) => x !== '전국'), r];
      return next.length === 0 ? ['전국'] : next;
    });
  };

  const resetAll = () => {
    setRegions(['전국']);
    setCheckIn(null);
    setCheckOut(null);
    setPeople(0);
  };

  const handleApply = () => {
    onApply?.({ regions, checkIn, checkOut, people });
    onClose?.();
  };

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
    >
      <Box sx={{ borderBottom: '1px solid #eee' }}>
        <Box
          sx={{
            maxWidth: 960,
            mx: 'auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            py: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            필터
          </Typography>
          <IconButton onClick={onClose} sx={{ color: 'user.main' }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ p: 3, maxWidth: 960, mx: 'auto', width: '100%' }}>
        <Box
          sx={{
            border: '1px solid #ddd',
            borderRadius: 2,
            overflow: 'hidden',
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                p: 2,
                borderRight: '1px solid #eee',
              }}
            >
              <SearchOutlinedIcon sx={{ color: 'user.main' }} />
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
                  지역
                </Typography>
                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
                  {regions.includes('전국')
                    ? '전국'
                    : regions.join(', ') || '지역을 선택해주세요'}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                p: 2,
                borderRight: '1px solid #eee',
              }}
            >
              <CalendarMonthOutlinedIcon sx={{ color: 'user.main' }} />
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
                  일정
                </Typography>
                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
                  {checkIn && checkOut
                    ? `${checkIn} ~ ${checkOut}`
                    : '날짜를 선택해주세요'}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, p: 2 }}>
              <PersonOutlineOutlinedIcon sx={{ color: 'user.main' }} />
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
                  인원
                </Typography>
                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
                  {people}명
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography sx={{ fontWeight: 700, mb: 1.5 }}>지역</Typography>
        <Divider sx={{ mb: 2 }} />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(9, 1fr)' },
            gap: 1.5,
            mb: 4,
          }}
        >
          {REGIONS.map((r) => (
            <FormControlLabel
              key={r}
              label={r}
              control={
                <Checkbox
                  checked={regions.includes(r)}
                  onChange={() => toggleRegion(r)}
                  sx={{
                    color: 'user.main',
                    '&.Mui-checked': { color: 'user.main' },
                  }}
                />
              }
            />
          ))}
        </Box>

        <Typography sx={{ fontWeight: 700, mb: 1.5 }}>일정</Typography>
        <Divider sx={{ mb: 2 }} />
        <Box
          sx={{
            mb: 4,
            height: 360,
            overflowY: 'auto',
            pr: 1,
            mr: -1,
            '&::-webkit-scrollbar': { width: 6 },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,.2)',
              borderRadius: 6,
            },
            WebkitMaskImage:
              'linear-gradient(180deg, rgba(0,0,0,1) 12px, rgba(0,0,0,1) calc(100% - 12px), rgba(0,0,0,0) 100%)',
            maskImage:
              'linear-gradient(180deg, rgba(0,0,0,1) 12px, rgba(0,0,0,1) calc(100% - 12px), rgba(0,0,0,0) 100%)',
          }}
        >
          <CalendarRange
            value={{ start: checkIn, end: checkOut }}
            onChange={({ start, end }) => {
              setCheckIn(start);
              setCheckOut(end);
            }}
            minDate={today}
            months={4}
          />
        </Box>

        <Typography sx={{ fontWeight: 700, mb: 1.5 }}>인원</Typography>
        <Divider sx={{ mb: 2 }} />
        <Stack direction="row" spacing={1.25} alignItems="center">
          <IconButton
            aria-label="감소"
            onClick={() => setPeople((p) => Math.max(0, p - 1))}
            sx={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '1px solid',
              borderColor: 'user.main',
              color: 'user.main',
              '&:hover': { backgroundColor: 'rgba(41, 6, 97, 0.06)' },
            }}
          >
            <RemoveRoundedIcon fontSize="small" />
          </IconButton>

          <Typography sx={{ width: 56, textAlign: 'center', fontWeight: 700 }}>
            {people} 명
          </Typography>

          <IconButton
            aria-label="증가"
            onClick={() => setPeople((p) => p + 1)}
            sx={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '1px solid',
              borderColor: 'user.main',
              color: 'user.main',
              '&:hover': { backgroundColor: 'rgba(41, 6, 97, 0.06)' },
            }}
          >
            <AddRoundedIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>

      <Box sx={{ borderTop: '1px solid #eee' }}>
        <Box
          sx={{
            maxWidth: 960,
            mx: 'auto',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 3,
            py: 2,
          }}
        >
          <Button
            variant="outlined"
            color="user"
            onClick={resetAll}
            sx={{
              width: 90,
            }}
          >
            초기화
          </Button>
          <Button
            variant="contained"
            color="user"
            onClick={handleApply}
            sx={{
              width: 90,
              color: '#fff',
            }}
          >
            검색
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
