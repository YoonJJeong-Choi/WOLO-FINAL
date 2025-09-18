import { useMemo, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';

const fmt = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};
const toDate = (str) => {
  if (!str) return null;
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const startOfMonth = (d) => new Date(d.getFullYear(), d.getMonth(), 1);
const addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);
const isSameDay = (a, b) =>
  a &&
  b &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();
const isBefore = (a, b) => a.getTime() < b.getTime();
const isAfter = (a, b) => a.getTime() > b.getTime();
const daysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();

function buildMonthGrid(monthDate) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDow = (startOfMonth(monthDate).getDay() + 7) % 7;
  const total = daysInMonth(year, month);
  const cells = [];
  const prevLast = new Date(year, month, 0).getDate();
  for (let i = firstDow - 1; i >= 0; i--) {
    cells.push({
      date: new Date(year, month - 1, prevLast - i),
      inMonth: false,
    });
  }

  for (let i = 1; i <= total; i++) {
    cells.push({ date: new Date(year, month, i), inMonth: true });
  }

  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1].date;
    cells.push({
      date: new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1),
      inMonth: false,
    });
  }
  return cells;
}

export default function CalendarRange({
  value, // { start: 'YYYY-MM-DD'|null, end: 'YYYY-MM-DD'|null }
  onChange, // ({start, end}) => void
  minDate, // 'YYYY-MM-DD'
  months = 4,
  vertical = true,
}) {
  const theme = useTheme();
  const brand = theme.palette.user?.main ?? theme.palette.primary.main;

  const today = useMemo(() => toDate(minDate) || new Date(), [minDate]);
  const startDate = toDate(value?.start);
  const endDate = toDate(value?.end);
  const [hoverDate, setHoverDate] = useState(null);
  const baseMonth = startOfMonth(today);
  const monthCount = Math.min(months, 4);
  const monthList = useMemo(
    () => Array.from({ length: monthCount }, (_, i) => addMonths(baseMonth, i)),
    [baseMonth, monthCount]
  );

  const disabled = (d) => isBefore(d, today);

  const withinPreview = (d) => {
    if (startDate && !endDate && hoverDate) {
      const a = isBefore(hoverDate, startDate) ? hoverDate : startDate;
      const b = isAfter(hoverDate, startDate) ? hoverDate : startDate;
      return !isBefore(d, a) && !isAfter(d, b);
    }
    if (startDate && endDate) {
      return !isBefore(d, startDate) && !isAfter(d, endDate);
    }
    return false;
  };

  const isRangeStart = (d) => {
    if (startDate && !endDate && hoverDate) {
      const a = isBefore(hoverDate, startDate) ? hoverDate : startDate;
      return isSameDay(d, a);
    }
    return startDate && isSameDay(d, startDate);
  };

  const isRangeEnd = (d) => {
    if (startDate && !endDate && hoverDate) {
      const b = isAfter(hoverDate, startDate) ? hoverDate : startDate;
      return isSameDay(d, b);
    }
    return endDate && isSameDay(d, endDate);
  };

  const handleSelect = (d) => {
    if (disabled(d)) return;
    if (!startDate || (startDate && endDate)) {
      onChange?.({ start: fmt(d), end: null });
      setHoverDate(null);
      return;
    }
    if (isAfter(d, startDate) || isSameDay(d, startDate)) {
      onChange?.({ start: fmt(startDate), end: fmt(d) });
      setHoverDate(null);
    } else {
      onChange?.({ start: fmt(d), end: null });
    }
  };

  // 주말 텍스트 색상 헬퍼 (선택점이 아닌 경우에만 적용)
  const getDayColor = (date, { off, dis, isEdge }) => {
    if (isEdge) return '#fff';

    const dow = date.getDay();
    const isSun = dow === 0;
    const isSat = dow === 6;

    // 평일
    if (!isSun && !isSat) {
      if (dis) return 'rgba(0,0,0,0.25)'; // 과거
      if (off) return 'rgba(0,0,0,0.35)'; // 다른달
      return 'inherit';
    }

    // 주말: 기본 진한색, 비활성/오프는 연하게
    const base = isSun ? theme.palette.error.main : theme.palette.primary.main;
    const LIGHT_ALPHA = 0.18; // 연함 강도 조절

    if (dis || off) return alpha(base, LIGHT_ALPHA);
    return base;
  };

  const Dow = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: vertical ? '1fr' : `repeat(${monthCount}, 1fr)`,
        rowGap: 3,
        columnGap: vertical ? 0 : 3,
      }}
    >
      {monthList.map((m) => {
        const grid = buildMonthGrid(m);
        const y = m.getFullYear();
        const month = m.getMonth() + 1;

        return (
          <Box key={`${y}-${month}`}>
            <Typography sx={{ fontWeight: 700, mb: 1.5 }}>
              {y}년 {month}월
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(7, 1fr)',
                mb: 1,
              }}
            >
              {Dow.map((d, idx) => (
                <Typography
                  key={d}
                  sx={{
                    textAlign: 'center',
                    fontSize: 12,
                    color:
                      idx === 0
                        ? theme.palette.error.main
                        : idx === 6
                        ? theme.palette.primary.main
                        : 'text.secondary',
                    fontWeight: idx === 0 || idx === 6 ? 700 : 400,
                  }}
                >
                  {d}
                </Typography>
              ))}
            </Box>

            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  rowGap: 1.25,
                }}
              >
                {grid.map(({ date, inMonth }) => {
                  if (!inMonth) {
                    return (
                      <Box
                        key={fmt(date)}
                        sx={{
                          px: 0.5,
                          height: 40,
                        }}
                      />
                    );
                  }

                  const inRange = withinPreview(date);
                  const isStart = isRangeStart(date);
                  const isEnd = isRangeEnd(date);
                  const isEdge = isStart || isEnd;
                  const dis = disabled(date);

                  return (
                    <Box
                      key={fmt(date)}
                      onClick={() => !dis && handleSelect(date)}
                      onMouseEnter={() => setHoverDate(date)}
                      onMouseLeave={() => setHoverDate(null)}
                      sx={{
                        px: 0.5,
                        position: 'relative',
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: dis ? 'not-allowed' : 'pointer',
                        '&::before': inRange
                          ? {
                              content: '""',
                              position: 'absolute',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              left: isStart ? '50%' : 0,
                              right: isEnd ? '50%' : 0,
                              height: 28,
                              backgroundColor: brand,
                              opacity: 0.36,
                              borderRadius: isStart
                                ? '14px 0 0 14px'
                                : isEnd
                                ? '0 14px 14px 0'
                                : 0,
                            }
                          : {},
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          zIndex: 1,
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 14,
                          fontWeight: 700,
                          color: getDayColor(date, {
                            off: false,
                            dis,
                            isEdge,
                          }),
                          backgroundColor: isEdge ? brand : 'transparent',
                          '&:hover':
                            !dis && !isEdge
                              ? { backgroundColor: 'rgba(0,0,0,0.04)' }
                              : undefined,
                        }}
                      >
                        {date.getDate()}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
