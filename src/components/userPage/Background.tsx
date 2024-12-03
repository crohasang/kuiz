import styled from '@emotion/styled';

export const TopBackground = styled.div`
  width: 100%;
  height: 300px;
  flex-shrink: 0;
  background: var(--brown2, #E39E5F);
`;

export const BottomBackground = styled.div`
  width: 100%;
  flex: 1;
  flex-direction: column;
  background: var(--brown3, #FBE5D0);
  min-height: calc(100vh - 300px);  // TopBackground 높이를 뺀 나머지
  display: flex;
`;