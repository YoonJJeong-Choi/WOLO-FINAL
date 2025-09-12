import React from 'react';
import { styled } from '@mui/material';
import logo from '../../../../public/wolo_f0f0f0.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import { Link } from 'react-router-dom';

const FooterWrapper = styled('footer')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #290661;
  flex-direction: column;
`;

const FooterHeader = styled('div')`
  height: 64px;
  width: 100%;
  border-top: 1px solid #4e3774;
  border-bottom: 1px solid #4e3774;
`;

const FooterHeaderInner = styled('div')`
  height: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 clamp(0px, 5vw, 300px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    color: white;
  }
`;

const FooterMain = styled('div')`
  height: 300px;
  width: 100%;
`;

const FooterMainInner = styled('div')`
  height: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 clamp(0px, 5vw, 300px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterMainInnerBox1 = styled('div')`
  width: 30%;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div:last-child {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: #ffffff71;
  }
`;

const FooterMainInnerBox2 = styled('div')`
  width: 30%;
  height: 270px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.3em;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 10px;
  }

  & > div {
    font-size: 1.1em;
    color: rgba(255, 255, 255, 0.85);
    margin-top: 4px;
  }
`;

const FooterMainInnerBox3 = styled('div')`
  width: 19%;
  height: 270px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.3em;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 10px;
  }

  & > div {
    font-size: 1.1em;
    color: rgba(255, 255, 255, 0.85);
    margin-top: 4px;
  }
`;

const LogoImg = styled('img')`
  width: 237px;
  height: 95px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const IconsWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LinkWrapper = styled('div')`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > a {
    text-decoration: none;
    color: white;
    font-size: 1.1em;
  }
  & > div {
    cursor: default;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterHeader>
        <FooterHeaderInner>
          <LinkWrapper>
            <Link to="/info/terms">이용약관</Link>
            <div>|</div>
            <Link to="/info/privacy">개인정보처리 방침</Link>
            <div>|</div>
            <Link to="/explore/faq">FAQ</Link>
          </LinkWrapper>
        </FooterHeaderInner>
      </FooterHeader>
      <FooterMain>
        <FooterMainInner>
          <FooterMainInnerBox1>
            <div>
              <LogoImg src={logo} alt="로고" />
            </div>
            <IconsWrapper>
              <YouTubeIcon sx={{ fontSize: 50, color: 'white' }} />
              <InstagramIcon sx={{ fontSize: 50, color: 'white' }} />
              <XIcon sx={{ fontSize: 50, color: 'white' }} />
            </IconsWrapper>
            <div>© 2025 WOLO. All rights reserved.</div>
          </FooterMainInnerBox1>
          <FooterMainInnerBox2>
            <h2>회사 정보</h2>
            <div>상호명 : 주식회사 WOLO</div>
            <div>대표자 : 최재혁</div>
            <div>주소 : 서울특별시 어딘가 123</div>
            <div>사업자등록번호 : 123-45-67890</div>
            <div>통신판매업신고번호 : 2025-서울강남구-9999호</div>
          </FooterMainInnerBox2>
          <FooterMainInnerBox3>
            <h2>고객 지원</h2>
            <div>이메일 : support@wolo.com</div>
            <div>전화 : 02-1234-5678</div>
            <div>운영시간 : 평일 09:00 ~ 18:00</div>
          </FooterMainInnerBox3>
        </FooterMainInner>
      </FooterMain>
    </FooterWrapper>
  );
};

export default Footer;
