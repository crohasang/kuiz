/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RoundedBackground from '../components/homePage/RoundedBackground';
import ProfileEllipse from '../components/homePage/ellipse/ProfileEllipse';
import Line from '../assets/line.svg?react';
import RankingCard from '../components/homePage/rankingCard/RankingCard';
import { Container } from '../components/common/container/Container';

const HomePage = () => {
  return (
    <Container>
      <div
        css={css`
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 38px;
            z-index: 2;
          `}
        >
          <ProfileEllipse />
        </div>
        <RoundedBackground>
          <div
            css={css`
              margin-top: 45px;
              color: #000;
              text-align: center;
              font-family: LeeSeoyun;
              font-size: 2rem;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            `}
          >
            UX디자인
          </div>
          <div
            css={css`
              margin-top: 24px;
              color: var(--brown1, #ba6c25);
              text-align: center;
              font-family: Pretendard;
              font-size: 3.5rem;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
            `}
          >
            3위
          </div>
          <div
            css={css`
              margin-top: 8px;
              color: var(--gray20, #797979);
              text-align: center;
              font-family: LeeSeoyun;
              font-size: 1.2rem;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            `}
          >
            70점
          </div>
          <div
            css={css`
              margin-top: 23px;
              display: flex;
              justify-content: center;
            `}
          >
            <Line />
          </div>
          <div>
            {/* <RankingCard 
              rank={1}
              title='과탑은 나의것'
              score={70}
              /> */}
          </div>
        </RoundedBackground>
      </div>
    </Container>
  );
};

export default HomePage;
