import React, { useState, useEffect, useRef } from 'react';
import { styled, Box, keyframes } from '@mui/material';
import { Computer, Surfing, Favorite } from '@mui/icons-material';
import logoimg from '/wolo_logo_290661.png';
import about1img from '/about/about1.png';
import about2img from '/about/about2.jpg';
import about3img from '/about/about3.jpg';
import about4img from '/about/about4.png';
import Group1 from '/about/Group 1.png';
import Group2 from '/about/Group 2.png';
import Group3 from '/about/Group 3.png';
import Group4 from '/about/Group 4.png';

// 메인 이미지가 부드럽게 등장하는 효과 (keyframes 수정)
const slideUpIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
// 메인 이미지가 부드럽게 사라지는 효과 (keyframes 수정)
const slideUpOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px) scale(0.98);
  }
`;

// ================= 레이아웃 및 스타일 (IntersectionObserver 관련 transform 제거) =================//
const Container = styled(Box)`
  display: flex;
  align-items: center;
  padding: 40px;
  background-color: white;
  min-height: 100vh;
  transition: background-color 0.8s ease-in-out;
`;

const ImageSection = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* IntersectionObserver의 transform 효과는 JS에서 직접 제어합니다. */
`;

const ImageContainer = styled(Box)`
  position: relative;
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainImage = styled('img')`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  object-fit: cover;
  z-index: 3;
  position: relative;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
`;

const BackgroundImage1 = styled('img')`
  width: 260px;
  height: 260px;
  border-radius: 15px;
  object-fit: cover;
  position: absolute;
  top: -20px;
  left: -30px;
  z-index: 1;
  opacity: 0.8;
  transition: all 0.6s ease-in-out;
  transform: rotateY(180deg);
`;

const BackgroundImage2 = styled('img')`
  width: 260px;
  height: 260px;
  border-radius: 15px;
  object-fit: cover;
  position: absolute;
  bottom: -20px;
  right: -30px;
  z-index: 2;
  opacity: 0.8;
  transition: all 0.6s ease-in-out;
  transform: rotateY(180deg);
`;

const TextSection = styled(Box)`
  flex: 1;
  padding-left: 20px; /* 오타 수정: padding-left: 20 -> padding-left: 20px */
`;

const AboutTitle = styled('h1')`
  color: #8b5cf6;
  font-size: 25px;
  margin: 0 0 10px 0;
  font-weight: 700;
`;

const MainTitle = styled('h3')`
  color: #8b5cf6;
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 15px 0;
  line-height: 1.3;
`;

const Description = styled('p')`
  color: #8b5cf6;
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 15px 0;
  font-weight: 500;
`;

const WoloSection = styled(Box)`
  background: linear-gradient(to bottom, white 0%, #f3f0ff 20%, #f3f0ff 100%);
  padding: 100px 40px 150px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const WoloTitle = styled('h2')`
  color: #8b5cf6;
  font-size: 32px;
  font-weight: bold;
  margin: 0 0 60px 0;
  text-align: center;
`;

const CardsContainer = styled(Box)`
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled(Box)`
  background-color: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1);
  transition: all 0.3s ease;
  flex: 1;
  min-width: 300px;
  max-width: 350px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
  }
`;

const CardIcon = styled(Box)`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const CardText = styled('p')`
  color: #8b5cf6;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  font-weight: 500;
`;

const Tagline = styled('p')`
  color: #8b5cf6;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  font-style: italic;
`;

const NewSection = styled(Box)`
  background: linear-gradient(to bottom, #f3f0ff 0%, #f3f0ff 80%, white 100%);
  padding: 80px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const NewSectionContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1200px;
  width: 100%;
  z-index: 2;
  position: relative;
`;

const NewSectionImage = styled('img')`
  width: 570px;
  height: auto;
  border-radius: 20px;
  transition: transform 0.3s ease;
  margin-bottom: 40px;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoImg = styled('img')`
  width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

const FinalTextContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 0 80px 0;
`;

const FinalText = styled('img')`
  max-width: 550px;
  min-width: 550px;
  display: block;
  transition: all 0.3s ease;
  position: relative;
  &:hover {
    transform: scale(1.02);
  }
`;

const TagSection = styled(Box)`
  background: linear-gradient(to bottom, #f3f0ff 0%, #f3f0ff 80%, white 100%);
  padding: 80px 40px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TagList = styled(Box)`
  width: 30rem;
  max-width: 90vw;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 1rem 0;
  position: relative;
  padding: 1.5rem 0;
  overflow: hidden;
`;

const LoopSlider = styled(Box)`
  .inner {
    display: flex;
    width: fit-content;
    animation-name: loop;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: ${({ reverse }) => (reverse ? 'reverse' : 'normal')};
    animation-duration: ${({ duration }) => duration}ms;
  }
`;

const TagItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0 0.2rem;
  font-size: 0.9rem;
  background-color: white;
  border-radius: 0.4rem;
  padding: 0.7rem 1rem;
  margin-right: 1rem;
  white-space: nowrap;
`;

const FadeOverlay = styled(Box)`
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #f3f0ff,
    transparent 30%,
    transparent 70%,
    #f3f0ff
  );
  position: absolute;
  inset: 0;
`;

const GlobalStyles = styled('style')`
  @keyframes loop {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }
`;

const About = () => {
  const images = [about1img, about2img, about3img];
  const [selectImageIndex, setSelectImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardsRef = useRef(null);
  const newSectionRef = useRef(null);
  const finalRef = useRef(null);
  const topImageRef = useRef(null);
  const topTextRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(false);
  const [visibleNew, setVisibleNew] = useState(false);
  const [visibleFinal, setVisibleFinal] = useState(false);
  const [visibleTopImage, setVisibleTopImage] = useState(false);
  const [visibleTopText, setVisibleTopText] = useState(false);

  const TAGS = [
    'JAVA',
    'Css',
    'VScode',
    'Intellij',
    'Oracle',
    'React',
    'Next.js',
    'Gatsby',
    'UI/UX',
    'SVG',
  ];
  const DURATION = 10000;
  const ROWS = 5;
  const TAGS_PER_ROW = 5;

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

  // 이미지 전환 로직 개선: 이전 이미지가 사라진 후 다음 이미지가 등장
  useEffect(() => {
    const mainImageElement = document.getElementById('main-image');
    if (!mainImageElement) return;

    const transitionDuration = 500; // slideUpOut 애니메이션 지속 시간 (0.5s)
    const intervalDuration = 3000; // 다음 이미지로 전환될 때까지의 대기 시간 (3초)

    // 애니메이션 시작 시 isTransitioning 상태 변경
    const startTransition = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, transitionDuration); // 사라지는 애니메이션이 끝난 후 이미지 인덱스 변경
    };

    // 이미지 인덱스가 변경된 후, isTransitioning 상태를 다시 false로
    // 변경하여 새로운 이미지가 등장하는 애니메이션을 시작
    const endTransition = () => {
      setIsTransitioning(false);
    };

    mainImageElement.addEventListener('animationend', endTransition);

    const intervalId = setInterval(
      startTransition,
      intervalDuration + transitionDuration
    );

    return () => {
      clearInterval(intervalId);
      mainImageElement.removeEventListener('animationend', endTransition);
    };
  }, [images.length]);

  // IntersectionObserver 로직 개선: 옵저버 등록 및 가시성 상태 관리
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          if (entry.target === cardsRef.current) setVisibleCards(isVisible);
          if (entry.target === newSectionRef.current) setVisibleNew(isVisible);
          if (entry.target === finalRef.current) setVisibleFinal(isVisible);
          if (entry.target === topImageRef.current)
            setVisibleTopImage(isVisible);
          if (entry.target === topTextRef.current) setVisibleTopText(isVisible);
        });
      },
      {
        root: null,
        rootMargin: '-15% 0px -15% 0px',
        threshold: 0.2,
      }
    );

    const elementsToObserve = [
      cardsRef.current,
      newSectionRef.current,
      finalRef.current,
      topImageRef.current,
      topTextRef.current,
    ];

    elementsToObserve.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementsToObserve.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <Container>
        {/* IntersectionObserver 효과를 JS로 직접 제어하여 CSS 충돌 방지 */}
        <ImageSection
          ref={topImageRef}
          style={{
            opacity: visibleTopImage ? 1 : 0,
            transform: visibleTopImage ? 'translateY(0)' : 'translateY(24px)',
            filter: visibleTopImage ? 'blur(0px)' : 'blur(2px)',
            transition:
              'opacity 700ms ease-out, transform 700ms ease-out, filter 700ms ease-out',
          }}
        >
          <ImageContainer>
            <MainImage
              id="main-image" // id를 추가하여 DOM 요소를 직접 참조
              src={images[selectImageIndex]}
              style={{
                animation: isTransitioning
                  ? `${slideUpOut} 0.5s cubic-bezier(0.4, 0, 0.2, 1)`
                  : `${slideUpIn} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
              }}
            />
            <BackgroundImage1
              src={images[(selectImageIndex + 1) % images.length]}
            />
            <BackgroundImage2
              src={images[(selectImageIndex + 2) % images.length]}
            />
          </ImageContainer>
        </ImageSection>

        <TextSection
          ref={topTextRef}
          style={{
            opacity: visibleTopText ? 1 : 0,
            transform: visibleTopText ? 'translateY(0)' : 'translateY(24px)',
            filter: visibleTopText ? 'blur(0px)' : 'blur(2px)',
            transition:
              'opacity 700ms ease-out, transform 700ms ease-out, filter 700ms ease-out',
          }}
        >
          <LogoImg src={logoimg} />
          <AboutTitle>About</AboutTitle>
          <MainTitle>워크(Work)와 베케이션(Vacation)의 결합</MainTitle>
          <Description>
            워케이션은 일과 휴가를 동시에 즐기는 새로운 라이프스타일입니다.
            <br />
            디지털 노마드와 원격 근무자에게 인기 있는 WOLO의 워케이션은
            <br />
            생산성과 창의력을 높이고 삶의 질을 향상시킵니다.
          </Description>
        </TextSection>
      </Container>

      {/* 나머지 컴포넌트들은 변경 없이 유지 */}
      <WoloSection>
        <WoloTitle>WOLO WORKATION</WoloTitle>
        <CardsContainer
          ref={cardsRef}
          style={{
            opacity: visibleCards ? 1 : 0,
            transform: visibleCards ? 'translateY(0)' : 'translateY(24px)',
            filter: visibleCards ? 'blur(0px)' : 'blur(2px)',
            transition:
              'opacity 800ms ease-out, transform 800ms ease-out, filter 800ms ease-out',
          }}
        >
          <Card>
            <CardIcon>
              <Computer sx={{ fontSize: 60, color: '#8b5cf6' }} />
            </CardIcon>
            <CardText>
              고속 인터넷, 최신 업무 장비 등 업무에 필요한 모든 것이 구비된
              공간에서 효율적으로 일하세요
            </CardText>
          </Card>
          <Card>
            <CardIcon>
              <Surfing sx={{ fontSize: 60, color: '#8b5cf6' }} />
            </CardIcon>
            <CardText>
              바다, 산, 도시를 아우르는 다채로운 액티비티로 여가를 활기차게
              채우세요
            </CardText>
          </Card>
          <Card>
            <CardIcon>
              <Favorite sx={{ fontSize: 60, color: '#8b5cf6' }} />
            </CardIcon>
            <CardText>
              웰니스 프로그램과 프리미엄 서비스로 최고의 휴식과 힐링을
              경험하세요
            </CardText>
          </Card>
        </CardsContainer>
        <Tagline>
          "일하면서도 여행하듯, 여행하면서도 일하듯 - WOLO와 함께."
        </Tagline>
      </WoloSection>

      <NewSection
        ref={newSectionRef}
        style={{
          opacity: visibleNew ? 1 : 0,
          transform: visibleNew ? 'translateY(0)' : 'translateY(24px)',
          filter: visibleNew ? 'blur(0px)' : 'blur(2px)',
          transition:
            'opacity 800ms ease-out, transform 800ms ease-out, filter 800ms ease-out',
        }}
      >
        <NewSectionContent>
          <NewSectionImage src={about4img} />
        </NewSectionContent>
      </NewSection>

      <FinalTextContainer
        ref={finalRef}
        style={{
          opacity: visibleFinal ? 1 : 0,
          transform: visibleFinal ? 'translateY(0)' : 'translateY(24px)',
          filter: visibleFinal ? 'blur(0px)' : 'blur(2px)',
          transition:
            'opacity 800ms ease-out, transform 800ms ease-out, filter 800ms ease-out',
        }}
      >
        <FinalText src={Group1} />
        <FinalText src={Group2} />
        <FinalText src={Group3} />
        <FinalText src={Group4} />
      </FinalTextContainer>

      <TagSection>
        <GlobalStyles />
        <TagList>
          {[...new Array(ROWS)].map((_, i) => {
            const shuffledTags = shuffle(TAGS).slice(0, TAGS_PER_ROW);
            return (
              <LoopSlider
                key={i}
                duration={random(DURATION - 5000, DURATION + 5000)}
                reverse={i % 2}
              >
                <div className="inner">
                  {shuffledTags.map((tag) => (
                    <TagItem key={tag}>
                      <span>#</span> {tag}
                    </TagItem>
                  ))}
                  {shuffledTags.map((tag) => (
                    <TagItem key={`${tag}-duplicate`}>
                      <span>#</span> {tag}
                    </TagItem>
                  ))}
                </div>
              </LoopSlider>
            );
          })}
        </TagList>
        <FadeOverlay />
      </TagSection>
    </>
  );
};

export default About;
