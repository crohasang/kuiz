/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
  color?: string;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const { title, onClick, color = '#E39E5F', ...rest } = props;
  return (
    <Button onClick={onClick} color={color} {...rest}>
      <div
        css={css`
          font-family: 'Pretendard';
          font-size: 1.6rem;
          line-height: 24px;
          text-align: center;
          color: #fff;
          font-weight: 500;
        `}
      >
        {title}
      </div>
    </Button>
  );
};

const Button = styled.button<{
  color: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  color: #fff;
  cursor: pointer;
  background-color: ${({ color }) => color};
  border-radius: 8px;
`;

export default PrimaryButton;
