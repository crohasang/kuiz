/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ placeholder, type, value, onChange, ...rest }: TextInputProps) => {
  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        height: 44px;
        padding: 6px 16px;
        align-items: center;
        border-radius: 8px;
        border: 1px solid #ba6c25;
        background: #fff;
      `}
    >
      <StyledInput
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

const StyledInput = styled.input`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #000;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 16px;
  font-family: 'Pretendard';
  appearance: none;
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: 'LINE Seed Sans';
    font-size: 1.5rem;
    font-weight: 400;
    color: #94969e;
  }
`;
