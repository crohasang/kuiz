/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ProfileEllipse from '../ellipse/ProfileEllipse';
import { Col, Row } from '../../common/flex/Flex';

interface RankingCardProps extends React.HTMLAttributes<HTMLDivElement> {
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

export const RankingCard = ({ rank, title, score, ...rest }: RankingCardProps) => {
  return (
    <div
      css={css`
        position: relative;
        width: 95px;
        height: 130px;
        flex-shrink: 0;
        border-radius: 5px;
        background: var(--white, #fff);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      `}
      {...rest}
    >
      <Row
        css={css`
          position: absolute;
          top: -12px;
          z-index: 2;
        `}
        justifyContent="center"
        alignItems="flex-start"
      >
        <span
          css={css`
            color: #fa9d49;
            font-family: 'Pretendard';
            font-size: 2rem;
            font-weight: 700;
          `}
        >
          {rank}
        </span>
        <span
          css={css`
            font-family: 'Pretendard';
            font-size: 1.2rem;
            color: #e4a166;
          `}
        >
          {getRankSuffix(rank)}
        </span>
      </Row>

      <Col alignItems="center" gap={7} padding={'18px 0 20px'}>
        <ProfileEllipse />
        <span
          css={css`
            color: #000;
            text-align: center;
            font-family: 'LeeSeoyun';
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 400;
          `}
        >
          {title}
        </span>
        <span
          css={css`
            font-size: 1rem;
            color: #666;
            font-weight: 500;
          `}
        >
          {score}점
        </span>
      </Col>
    </div>
  );
};

export default RankingCard;
