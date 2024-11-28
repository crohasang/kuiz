/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RoundedBackground from '../components/homePage/RoundedBackground';
import ProfileEllipse from '../components/homePage/ellipse/ProfileEllipse';

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
          <div css={css`margin-top: 60px;`}>
            <h1>HomePage</h1>
          </div>
        </RoundedBackground>
      </div>
    </div>
  );
};

export default HomePage;