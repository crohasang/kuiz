/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RoundedBackground from '../components/homePage/RoundedBackground';
import ProfileEllipse from '../components/homePage/ellipse/ProfileEllipse';
import Line from '../assets/line.svg?react';
import RankingCard from '../components/homePage/rankingCard/RankingCard';

const HomePage = () => {
  return (
    <div
      css={css`
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      `}
    >
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
            <div css={css`
            margin-top: 45px;
            color: #000;
            text-align: center;
            font-family: LeeSeoyun;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;`}>UX디자인</div>
            <div css={css`
            margin-top: 24px;
            color: var(--brown1, #BA6C25);
            text-align: center;
            font-family: Pretendard;
            font-size: 35px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;`}>3위</div>
            <div css={css`
            margin-top: 8px;
            color: var(--gray20, #797979);
            text-align: center;
            font-family: LeeSeoyun;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;`}>
              70점</div>
            <div css={css`
            margin-top: 23px;
            display: flex;
            justify-content: center;
            `}>
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
    </div>
  );
};

export default HomePage;