import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface RoundedBackgroundProps {
  children: ReactNode;
}

const BackgroundContainer = styled.div`
  position: relative;
  width: calc(100% - 24px); // 전체 너비에서 좌우 여백 24px(12px * 2) 제외
  margin: 53px 12px 0px 12px; // 좌우 12px 여백
  min-height: 100px;
  height: auto;
  flex-shrink: 0;
  border-radius: 20px 20px 20px 20px;
  background: var(--brown3, #fbe5d0);
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: calc(100% - 24px); // 모바일에서도 동일하게 적용
    margin: 53px 12px 0px 12px;
  }
`;

const RoundedBackground = ({ children }: RoundedBackgroundProps) => {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

export default RoundedBackground;
