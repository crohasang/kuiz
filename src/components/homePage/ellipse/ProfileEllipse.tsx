import styled from '@emotion/styled';

const ProfileEllipse = styled.div<{ size?: string }>`
  width: ${({ size }) => size || '50px'};
  height: ${({ size }) => size || '50px'};
  border-radius: 50%;
  border: 1px solid var(--gray1, #ba6c25);
  background-color: var(--gray1, #d9d9d9);
`;

export default ProfileEllipse;
