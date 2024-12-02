/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ProfileEllipse from '../ellipse/ProfileEllipse';
import { Row } from '../../common/flex/Flex';

interface RankingRowProps extends React.HTMLAttributes<HTMLDivElement> {
  rank: number;
  nickname: string;
  score: number;
}

export const RankingRow = ({ rank, nickname, score, ...rest }: RankingRowProps) => {
  return (
    <Row
      css={css`
        width: 261px;
        align-items: center;
        justify-content: flex-start;
      `}
      {...rest}
    >
      <div
        css={css`
          min-width: 24px;
        `}
      >
        <span
          css={css`
            color: #000;
            text-align: center;
            font-family: Pretendard;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          `}
        >
          {rank}
        </span>
      </div>
      <div
        css={css`
          margin-left: 14px;
        `}
      >
        <ProfileEllipse
          css={css`
            width: 44px;
            height: 44px;
            flex-shrink: 0;
            border: none;
          `}
        />
      </div>
      <div
        css={css`
          margin-left: 19px;
        `}
      >
        <span
          css={css`
            color: #000;
            font-family: LeeSeoyun;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          `}
        >
          {nickname}
        </span>
      </div>
      <div
        css={css`
          margin-left: auto;
        `}
      >
        <span
          css={css`
            color: var(--gray20, #797979);
            text-align: center;
            font-family: LeeSeoyun;
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          `}
        >
          {score}점
        </span>
      </div>
    </Row>
  );
};

export default RankingRow;