import styled from '@emotion/styled';
import { css } from '@emotion/react';

// @font-face로 외부 폰트(leeSeoyunFont) 정의
const leeSeoyunFont = css`
  @font-face {
    font-family: 'LeeSeoyun';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

//최상위 컨테이너 설정
export const Container = styled.div`
  position: absolute;
  top: 0%;
  width: 100%;
  height: calc(100vh - 60px); /* BottomNavigation 높이를 제외한 영역 */
  overflow: hidden; /* 스크롤 제거 */
`

export const TopBackground = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: #e39e5f;
  z-index: 1; /* 위로 겹쳐지도록 설정 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
`;

export const BottomBackground = styled.div`
  position: absolute;
  bottom: -20%;
  left: 50%;
  width: 200%;
  height: 70%;
  background-color: #fbe5d0;
  border-radius: 50%; /* 원 형태 */
  transform: translateX(-50%);
  z-index: 2; /* TopBackground 아래에 위치 */
  display: flex;
  flex-direction: column;
  justify-content: start; /* 상단에서 시작 */
  align-items: center;
  padding-top: 120px;

  @media screen and (min-width: 1200px) {
    height: 70%; /* 고해상도 화면에서도 높이를 적절히 유지 */
  }
`;

export const Title = styled.h1`
  ${leeSeoyunFont} /* 외부 폰트 정의 추가 */
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 30px;
  font-family: 'LeeSeoyun', Arial, sans-serif; /* LeeSeoyun 폰트 적용 */

  @media screen and (min-width: 1200px) {
    font-size: 2rem;
  }

`;

export const Button = styled.button<{ level: string }>`
  ${leeSeoyunFont} /* 외부 폰트 정의 추가 */
  width: 80%;
  max-width: 300px;
  padding: 20px;
  margin: 16px 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  background: #f4a261;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'LeeSeoyun', Arial, sans-serif; /* 외부 폰트 적용 */

  &:hover {
    background: #ffffff;
    color: #f4a261;
  }

  @media (min-width: 1200px) {
    padding: 20px;
    font-size: 1.5rem;
  }
`;

export const FloatingButton = styled.button`
  position: fixed; /* 화면 고정 */
  bottom: 80px; /* 하단 여백 */
  right: 20px; /* 오른쪽 여백 */
  width: 56px; /* 버튼 크기 */
  height: 56px;
  border-radius: 50%; /* 원형 버튼 */
  background-color: #f4a261; /* 버튼 배경색 */
  border: none; /* 테두리 제거 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* 클릭 가능한 버튼으로 설정 */
  z-index: 3; /* TopBackground 아래에 위치 */
  transition: background-color 0.3s ease, transform 0.3s ease; /* 애니메이션 효과 */

  &:active {
    transform: scale(0.95); /* 클릭 시 살짝 축소 */
  }

  svg {
    width: 24px; /* 아이콘 크기 */
    height: 24px;
    fill: white; /* 아이콘 색상 */
  }
`;

