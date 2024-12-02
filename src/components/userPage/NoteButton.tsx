/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Row } from '../common/flex/Flex';
import RightChevron from '../../assets/common/right_chevron.svg?react';
import { useNavigate } from 'react-router-dom';

interface NoteButtonProps {
  title: string;
  to: string;
  className?: string;
}

const NoteButton = ({ title, to, className }: NoteButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      css={css`
        width: 100%;
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
      `}
      className={className}
    >
      <Row
        justifyContent="space-between"
        alignItems="center"
      >
        <span css={css`
          color: var(--brown0, #9C5D23);
          font-family: Pretendard;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        `}>{title}</span>
        <RightChevron />
      </Row>
    </button>
  );
};

export default NoteButton;
