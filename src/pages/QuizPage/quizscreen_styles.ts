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
    transform: translateX(10%) translateY(-25%) scale(0.8); /* 약간 오른쪽으로 이동하며 축소 */
  }
`;

// scaleAndShiftLeft, scaleDownAndShiftLeft는 오른쪽 그림이 정답일 때 사용할 2가지 keyframes 세트 (왼쪽으로 살짝 이동하며 확대)
const scaleAndShiftLeft = keyframes`
  from {
    transform: translateX(0) scale(1);
  }
  to {
    transform: translateX(-10%) translateY(-25%) scale(1.2); /* 약간 왼쪽으로 이동하며 확대 */
  }
`;

const scaleDownAndShiftLeft = keyframes`
  from {
    transform: translateX(0) scale(1);
  }
  to {
    transform: translateX(-10%) translateY(-25%) scale(0.8); /* 약간 왼쪽으로 이동하며 축소 */
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
  height: 270px; /* 고정된 버튼 높이 */
  margin: 8px; /* 간격 조정 */
  font-size: 2rem;
  font-weight: bold;
  color: #ba6c25;
  background: #ffffff;
  border-radius: 12px; /* 부드러운 모서리 */
  text-align: 'center', // 텍스트 정렬
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  &.left-correct {
    animation: ${scaleAndShiftRight} 0.5s forwards;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  }

  &.right-incorrect {
    animation: ${scaleDownAndShiftRight} 0.5s forwards;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  }

  &.left-incorrect {
    animation: ${scaleDownAndShiftLeft} 0.5s forwards;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  }

  &.right-correct {
    animation: ${scaleAndShiftLeft} 0.5s forwards;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  }

  /* 초기 상태에서 동일 크기 유지 */
  &:not(.correct):not(.incorrect) {
    transform: scale(1); /* 초기 크기 */
  }

  img {
    height: 100%;
    max-width: 120%;
    object-fit: contain;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
  }

  span {
    font-size: 1.8rem;
    font-weight: bold; // 텍스트 굵기
    color: #5a3220; // 텍스트 색상
  }

  .overlay-text {
    position: absolute; /* Button을 기준으로 고정 */
    top: -40px;
    left: 50%;
    transform: translateX(-50%); /* 가로 중앙 정렬 */
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
  margin-top: -20px;
  @media (max-height: 840px) {
    margin-top: -45px;
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
      font-size: 1.6rem;
    }

    .explanation {
      font-size: 1.6rem;
    }

    .divider {
      margin: 4px 0;
    }
  }
`;

// 문제 컨테이너 (세로 정렬)
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 20px;
  margin-top: -52px; /* 약간 컨테이너를 중앙에서 위쪽으로 올리기 */
  max-width: 340px;
  word-wrap: break-word; /* 텍스트가 너무 길면 자동으로 줄바꿈 */
  overflow-wrap: break-word; /* 최신 브라우저 호환성 */
  white-space: normal; /* 기본 줄바꿈 동작 */

  .question {
    font-family: 'Pretendard';
    font-size: 1.8rem;
    font-weight: 500;
    color: #9C5D23;
    margin: 0 0;
    margin-bottom: 20px;
  }
`;

//Input(입력란) 관련한 컴포넌트
export const InputContainer = styled.div`
  display: flex;
  align-items: center; /* 세로 정렬 */
  justify-content: center;
  width: 100%; /* 부모 컨테이너의 전체 너비 */
  padding: 20px; 
  margin-top: 28px;
  max-width: 340px; /* 고정된 최대 너비 */

  .inputLabel {
    font-family: 'Pretendard';
    font-size: 16px;
    font-weight: 600;
    color: #9C5D23; /* 텍스트 색상 */
    white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  }
`;

//입력하는 box
export const InputBox = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #9C5D23; /* 입력란 밑줄 */
  font-size: 16px;
  padding: 5px;
  margin-left: 8px;
  text-align: center;
  outline: none;
  font-weight: 600;
  color: #9C5D23; /* 입력 텍스트 색상 */
  background: none;

  &::placeholder {
    color: #9C5D23;
    opacity: 0.7; /* 플레이스홀더 색상 */
  }
`;
