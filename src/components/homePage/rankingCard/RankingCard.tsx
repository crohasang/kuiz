/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ProfileEllipse from '../ellipse/ProfileEllipse';

interface RankingCardProps {
  rank: number;
  title: string;
  score: number;
}

const getRankSuffix = (rank: number) => {
  if (rank === 1) return 'st';
  if (rank === 2) return 'nd';
  if (rank === 3) return 'rd';
  return 'th';
};

export const RankingCard = ({ rank, title, score }: RankingCardProps) => {
  return (
    <div
      css={css`
        position: relative;
        width: 95px;
height: 130px;
flex-shrink: 0;
border-radius: 5px;
background: var(--white, #FFF);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      `}
    >
      <span
        css={css`
          position: absolute;
          top: 0;
          left: 45%;
          z-index: 2;
          color: var(--orange0, #FA9D49);
          font-family: 'Pretendard';
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;`}>
        {rank}
      </span>
      <span
        css={css`
          position: absolute;
          top: 10px;
          left: 60%;
          font-family: 'Pretendard';
          font-size: 20px;
          color: #E4A166;
          z-index: 2;
        `}
      >
        {getRankSuffix(rank)}
      </span>
      <div
        css={css`
          position: relative;
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        `}
      >
        <ProfileEllipse />
        <h3
          css={css`
            color: #000;
            text-align: center;
            font-family: 'LeeSeoyun';
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          `}
        >
          {title}
        </h3>
        <span
          css={css`
            font-size: 24px;
            color: #666;
            font-weight: 500;
          `}
        >
          {score}점
        </span>
      </div>
    </div>
  );
};

export default RankingCard;