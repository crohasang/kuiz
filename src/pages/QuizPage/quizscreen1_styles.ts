import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

//animation keyframes인 moveUp 정의(상단 background에다가 적용할 것임 / 올라가는 효과)
const moveUp = keyframes`
  from {
    transform: translateX(-50%) translateY(0);
  }
  to {
    transform: translateX(-50%) translateY(-10%);
  }
`;

// 애니메이션을 위한 keyframes 정의
// scaleAndShiftRight, scaleDownAndShiftRight는 왼쪽 그림이 정답일 때 사용할 2가지 keyframes 세트 (오른쪽으로 살짝 이동하며 확대)
const scaleAndShiftRight = keyframes`
  from {
    transform: translateX(0) scale(1);
  }
  to {
    transform: translateX(10%) translateY(-25%) scale(1.2); /* 약간 오른쪽으로 이동하며 확대 */
  }
`;

const scaleDownAndShiftRight = keyframes`
  from {
    transform: translateX(0) scale(1);
  }
  to {
    transform: translateX(10%) translateY(-25%) scale(0.8); /* 약간 왼쪽으로 이동하며 축소 */
  }
`;

// 최상위 컨테이너 설정
export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh; /* BottomNavigation 높이를 여기선 고려할 필요가 없다 */
  overflow: hidden; /* 스크롤 제거 */
`;

// 하단 배경 (기존 TopBackground 스타일을 반대로 적용)
export const BottomBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%; /* 화면의 절반 높이 */
  background-color: #fbe5d0; /* 기존 하단 배경색 */
  z-index: 1; /* 상단 배경 위에 표시 */
  display: flex;
  flex-direction: column;
  padding-top: 360px; /* 세로 위치 하드 코딩(350px / 디바이스마다 위치가 약간씩 다를 수 있음) */
  align-items: center; /* 가로 중앙 정렬 */
`;

// 상단 배경 (기존 BottomBackground 스타일을 반대로 적용)
export const TopBackground = styled.div`
  position: absolute;
  top: -40%;
  left: 50%;
  width: 200%; /* 화면의 2배 크기 */
  height: 65%; /* 원형 비율 유지 */
  background-color: #e39e5f; /* 기존 상단 배경색 */
  border-radius: 50%; /* 원형 형태 */
  transform: translateX(-50%);
  z-index: 2; /* BottomBackground 위에 표시 */
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 상단에서 시작 */
  align-items: center;
  padding-bottom: 40px;

  &.top-background-animate {
    animation: ${moveUp} 0.5s forwards;
  }

  @media screen and (min-width: 1200px) and (min-height: 900px) {
    height: 60%; /* 고해상도 화면에서도 적절히 유지 */
  }
`;

// 제목 스타일
export const Title = styled.h1<{ color?: string; font?: string }>`
  color: ${({ color }) => color || '#5a3220'}; /* 기본 색상은 #5a3220 */
  font-size: 2rem;
  text-align: center;
  margin-bottom: 16px;
  font-family: ${({ font }) => font || 'LeeSeoyun'};

  @media screen and (min-width: 1200px) {
    font-size: 2rem;
  }
`;

// 선택 버튼 스타일
export const Button = styled.button`
  width: 45%; /* 버튼 너비를 45%로 설정해 두 개의 버튼이 가로로 배치되도록 */
  max-width: 200px;
  height: 300px; /* 고정된 버튼 높이 */
  margin: 8px; /* 간격 조정 */
  font-size: 2rem;
  font-weight: bold;
  color: #ba6c25;
  background: #ffffff;
  border-radius: 12px; /* 부드러운 모서리 */
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.correct {
    animation: ${scaleAndShiftRight} 0.5s forwards;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  }

  &.incorrect {
    animation: ${scaleDownAndShiftRight} 0.5s forwards;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  }

  /* 초기 상태에서 동일 크기 유지 */
  &:not(.correct):not(.incorrect) {
    transform: scale(1); /* 초기 크기 */
  }

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
  }

  .overlay-text {
    position: relative;
    top: -180px;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: bold;
    color: #ba6c25;
  }
`;

// 버튼 컨테이너 (가로 정렬)
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around; /* 버튼 사이 간격 균등 배분 */
  align-items: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 400px) {
    margin-top: -5px;
  }
`;

// 해설 컨테이너
export const ExplanationContainer = styled.div`
  position: absolute; /* 절대 위치 */
  bottom: 0;
  left: 50%; /* 부모 컨테이너 기준 왼쪽에서 50% */
  transform: translateX(-50%); /* 자기 자신의 너비의 절반만큼 왼쪽으로 이동해 가운데 정렬 */
  background-color: rgba(251, 229, 208, 0); /* 기존 색상에 투명도 추가 (0.8) */
  padding: 4px;
  text-align: left;
  font-size: 2rem;
  font-family: 'Pretendard';
  color: #5a3220;
  width: 90%;
  word-wrap: break-word; /* 텍스트가 너무 길면 자동으로 줄바꿈 */
  overflow-wrap: break-word; /* 최신 브라우저 호환성 */
  white-space: normal; /* 기본 줄바꿈 동작 */
  z-index: 10;

  .explanation-title {
    font-size: 1.6rem;
    font-weight: bold;
    color: #5a3220;
  }

  /* 구분선 */
  .divider {
    width: 100%;
    height: 1px;
    background-color: #5a3220; /* 선 색상 */
    margin: 8px 0; /* 위아래 간격 */
  }

  .explanation {
    font-size: 1.6rem;
    font-weight: normal;
    color: #5a3220;
    margin: 0 0;
  }

  @media screen and (max-width: 768px) {
    .explanation-title {
      font-size: 0.8rem;
    }

    .explanation {
      font-size: 0.8rem;
    }

    .divider {
      margin: 4px 0;
    }
  }
`;

// 다음 버튼 스타일
export const NextButton = styled.button`
  margin-top: 16px; /* 위의 여유 공간 */
  margin-bottom: 16px; /* 하단 간격 */
  padding: 12px 24px;
  background-color: #e39e5f;
  color: #ffffff;
  font-size: 1.6rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  box-sizing: border-box; /* 패딩 포함하여 크기 계산 */

  &:hover {
    background-color: #d2884f;
  }

  &:active {
    background-color: #c27845;
  }
`;
