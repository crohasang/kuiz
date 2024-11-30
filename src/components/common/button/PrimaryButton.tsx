/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
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
      {title}
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
  padding: 16px 0 15px;
  color: #fff;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 700;
  background-color: ${({ color }) => color};
  border-radius: 8px;
`;

export default PrimaryButton;
