import React, { useEffect, useRef, useState, useCallback } from 'react';
import { styled, Box } from '@mui/material';
import LargeButton from '../components/buttons/LargeButton';

const PageWrap = styled(Box)`
  width: 100%;
  min-height: 72vh;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  padding: 56px 0 64px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f5f0ff 60%, #f5f0ff 100%);
`;

const LeftColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FilterBar = styled(Box)`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const Select = styled('select')`
  height: 30px;
  padding: 0 8px;
  border: 1px solid #e6e6eb;
  border-radius: 8px;
  background: #ffffff;
  color: #5a4bb3;
  font-size: 13px;
  min-width: 100px;
`;

const SearchInput = styled('input')`
  height: 30px;
  padding: 0 10px;
  border: 1px solid #e6e6eb;
  border-radius: 8px;
  background: #ffffff;
  color: #5a4bb3;
  font-size: 13px;
  min-width: 100px;
`;

const MapInner = styled(Box)`
  width: 76%;
  height: 280px;
  border-radius: 0px;
`;

const RightColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const RightPanel = styled(Box)`
  height: 280px;
  display: flex;
  flex-direction: column;
`;

const InfoThumb = styled('img')`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const InfoBody = styled(Box)`
  padding: 12px 4px 0 4px;
  color: #5a4bb3;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const ButtonRow = styled(Box)`
  display: flex;
  gap: 10px;
  margin-top: 8px;
`;

const InfoTitle = styled('h3')`
  margin: 0;
`;

const InfoText = styled('p')`
  margin: 0;
  line-height: 1.5;
`;

// 데이터 관리

const allRegionData = {
  서울특별시: {
    filename: 'Seoul',
    sigungus: [
      '강남구',
      '서초구',
      '송파구',
      '강동구',
      '강서구',
      '양천구',
      '구로구',
      '금천구',
      '영등포구',
      '동작구',
      '관악구',
      '마포구',
      '서대문구',
      '은평구',
      '용산구',
      '종로구',
      '중구',
      '성동구',
      '광진구',
      '동대문구',
      '중랑구',
      '성북구',
      '강북구',
      '도봉구',
      '노원구',
    ],
    idToKorean: {
      'Gangnam-gu': '강남구',
      'Seocho-gu': '서초구',
      'Songpa-gu': '송파구',
      'Gangdong-gu': '강동구',
      'Gangseo-gu': '강서구',
      'Yangcheon-gu': '양천구',
      'Guro-gu': '구로구',
      'Geumcheon-gu': '금천구',
      'Yeongdeungpo-gu_1_': '영등포구',
      'Dongjak-gu': '동작구',
      'Gwanak-gu': '관악구',
      'Mapo-gu': '마포구',
      'Seodaemun-gu': '서대문구',
      'Eunpyeong-gu': '은평구',
      'Yongsan-gu': '용산구',
      'Jongno-gu': '종로구',
      'Jung-gu': '중구',
      'Seongdong-gu': '성동구',
      'Gwangjin-gu': '광진구',
      'Dongdaemun-gu': '동대문구',
      'Jungnang-gu': '중랑구',
      'Seongbuk-gu': '성북구',
      'Gangbuk-gu': '강북구',
      'Dobong-gu': '도봉구',
      'Nowon-gu': '노원구',
    },
  },
  // 다른 지역 데이터는 필요에 따라 추가
  경기도: { filename: 'Gyeonggi', sigungus: [], idToKorean: {} },
  인천광역시: { filename: 'Incheon', sigungus: [], idToKorean: {} },
  부산광역시: { filename: 'Busan', sigungus: [], idToKorean: {} },
  대구광역시: { filename: 'Daegu', sigungus: [], idToKorean: {} },
  광주광역시: { filename: 'Gwangju', sigungus: [], idToKorean: {} },
  대전광역시: { filename: 'Daejeon', sigungus: [], idToKorean: {} },
  울산광역시: { filename: 'Ulsan', sigungus: [], idToKorean: {} },
  세종특별자치시: { filename: 'Sejong', sigungus: [], idToKorean: {} },
  강원특별자치도: { filename: 'Gangwon', sigungus: [], idToKorean: {} },
  충청북도: { filename: 'Chungbuk', sigungus: [], idToKorean: {} },
  충청남도: { filename: 'Chungnam', sigungus: [], idToKorean: {} },
  전라북도: { filename: 'Jeonbuk', sigungus: [], idToKorean: {} },
  전라남도: { filename: 'Jeonnam', sigungus: [], idToKorean: {} },
  경상북도: { filename: 'Gyeongbuk', sigungus: [], idToKorean: {} },
  경상남도: { filename: 'Gyeongnam', sigungus: [], idToKorean: {} },
  제주특별자치도: { filename: 'Jeju', sigungus: [], idToKorean: {} },
};

const useSvgMap = (svgContainerRef, sido, onSigunguClick) => {
  const [activeGu, setActiveGu] = useState(null);

  // SVG 로드 및 이벤트 리스너 설정
  useEffect(() => {
    let isMounted = true;
    const { filename, idToKorean } =
      allRegionData[sido] || allRegionData['서울특별시'];
    const svgPath = `/region/${filename}.svg`;

    const handleClick = (event) => {
      const p = event.target;
      const englishId = p.id;
      const name = idToKorean[englishId] || englishId;
      setActiveGu(englishId);
      onSigunguClick(name);
    };

    fetch(svgPath)
      .then((res) => res.text())
      .then((svgText) => {
        if (!isMounted || !svgContainerRef.current) return;
        svgContainerRef.current.innerHTML = svgText;

        const rootSvg = svgContainerRef.current.querySelector('svg');
        if (!rootSvg) return;

        rootSvg.setAttribute('width', '100%');
        rootSvg.setAttribute('height', '100%');
        rootSvg.setAttribute(
          'viewBox',
          rootSvg.getAttribute('viewBox') || '0 0 1400 1400'
        );
        rootSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        rootSvg.style.filter =
          'drop-shadow(0 10px 12px rgba(0,0,0,0.18)) drop-shadow(0 3px 6px rgba(0,0,0,0.12))';

        const paths = rootSvg.querySelectorAll('path');
        paths.forEach((p) => {
          p.style.transition = 'fill 0.2s ease';
          p.style.cursor = 'pointer';
          p.setAttribute('fill', '#f5f1ff');
          p.setAttribute('stroke', '#d8d3e8');
          p.setAttribute('stroke-width', '1');

          p.addEventListener('click', handleClick);
        });

        // 마우스 호버/리브 이벤트
        const handleMouseEnter = (event) => {
          const p = event.target;
          if (p.id !== activeGu) {
            p.setAttribute('fill', '#5a4bb3');
          }
        };
        const handleMouseLeave = (event) => {
          const p = event.target;
          if (p.id !== activeGu) {
            p.setAttribute('fill', '#f5f1ff');
          }
        };
        paths.forEach((p) => {
          p.addEventListener('mouseenter', handleMouseEnter);
          p.addEventListener('mouseleave', handleMouseLeave);
        });
      })
      .catch((e) => {
        console.error('SVG 로드 오류:', e);
        if (svgContainerRef.current)
          svgContainerRef.current.innerHTML =
            '<p style="color:red;">지도를 불러오지 못했습니다.</p>';
      });

    return () => {
      isMounted = false;
      const rootSvg = svgContainerRef.current?.querySelector('svg');
      if (rootSvg) {
        const paths = rootSvg.querySelectorAll('path');
        paths.forEach((p) => {
          p.removeEventListener('click', handleClick);
        });
      }
    };
  }, [sido, onSigunguClick]);

  // 색상 및 라벨 업데이트
  useEffect(() => {
    const rootSvg = svgContainerRef.current?.querySelector('svg');
    if (!rootSvg) return;

    // 이전에 생성된 라벨 삭제
    let labelLayer = rootSvg.querySelector('[data-layer="labels"]');
    if (!labelLayer) {
      labelLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      labelLayer.setAttribute('data-layer', 'labels');
      rootSvg.appendChild(labelLayer);
    } else {
      while (labelLayer.firstChild) {
        labelLayer.removeChild(labelLayer.firstChild);
      }
    }

    const paths = rootSvg.querySelectorAll('path');
    paths.forEach((p) => {
      p.setAttribute('fill', p.id === activeGu ? '#5a4bb3' : '#f5f1ff');
    });

    if (activeGu) {
      const activePath = rootSvg.querySelector(`#${activeGu}`);
      if (activePath) {
        const name = allRegionData[sido]?.idToKorean[activeGu] || activeGu;
        const bbox = activePath.getBBox();
        const cx = bbox.x + bbox.width / 2;
        const cy = bbox.y + bbox.height / 2;

        const createTextElement = (attrs, textContent) => {
          const textEl = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'text'
          );
          Object.entries(attrs).forEach(([key, value]) =>
            textEl.setAttribute(key, value)
          );
          textEl.textContent = textContent;
          return textEl;
        };

        // 텍스트 라벨 추가
        labelLayer.appendChild(
          createTextElement(
            {
              x: String(cx),
              y: String(cy),
              'text-anchor': 'middle',
              'dominant-baseline': 'middle',
              fill: 'none',
              stroke: '#ffffff',
              'stroke-width': '6',
              'font-size': '40',
              'font-weight': '700',
            },
            name
          )
        );

        labelLayer.appendChild(
          createTextElement(
            {
              x: String(cx),
              y: String(cy),
              'text-anchor': 'middle',
              'dominant-baseline': 'middle',
              fill: '#5a4bb3',
              'font-size': '40',
              'font-weight': '700',
            },
            name
          )
        );
      }
    }
  }, [activeGu, sido, svgContainerRef]);
};

// =========================================================

const Region = () => {
  const svgContainerRef = useRef(null);
  const [sido, setSido] = useState('서울특별시');
  const [sigungu, setSigungu] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleSigunguClick = useCallback((name) => {
    setSigungu(name);
  }, []);

  useSvgMap(svgContainerRef, sido, handleSigunguClick);

  const currentSigungus = allRegionData[sido]?.sigungus || [];

  return (
    <PageWrap>
      <LeftColumn>
        <FilterBar>
          <label htmlFor='sido-select' style={{ display: 'none' }}>
            시도 선택
          </label>
          <Select
            id='sido-select'
            value={sido}
            onChange={(e) => {
              setSido(e.target.value);
              setSigungu('');
            }}
          >
            {Object.keys(allRegionData).map((regionName) => (
              <option key={regionName} value={regionName}>
                {regionName}
              </option>
            ))}
          </Select>

          <label htmlFor='sigungu-select' style={{ display: 'none' }}>
            시/군/구 선택
          </label>
          <Select
            id='sigungu-select'
            value={sigungu}
            onChange={(e) => setSigungu(e.target.value)}
          >
            <option value=''>시/군/구 선택</option>
            {currentSigungus.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Select>

          <label htmlFor='search-input' style={{ display: 'none' }}>
            검색어 입력
          </label>
          <SearchInput
            id='search-input'
            placeholder='검색어 입력'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </FilterBar>
        <MapInner>
          <div ref={svgContainerRef} aria-label='한국 지역 지도 SVG' />
        </MapInner>
      </LeftColumn>

      <RightColumn>
        <RightPanel>
          <InfoTitle>알쓸 WOLO 워케이션</InfoTitle>
          <InfoText>
            바쁜 하루 속에서 찾는 작은 여유
            <br />
            WOLO 워케이션이 당신의 일상을 바꿉니다.
          </InfoText>
          <InfoThumb
            src='/about/about2.jpg'
            alt='Workcation retreat thumbnail'
          />
          <InfoBody>
            <ButtonRow>
              <LargeButton buttonName='예약하기' />
              <LargeButton buttonName='자세히' />
            </ButtonRow>
          </InfoBody>
        </RightPanel>
      </RightColumn>
    </PageWrap>
  );
};

export default Region;
