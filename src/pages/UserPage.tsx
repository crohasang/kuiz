/** @jsxImportSource @emotion/react */
import { Container } from "../components/common/container/Container"
import { css } from '@emotion/react';
import { Col } from "../components/common/flex/Flex";
import { TopBackground, BottomBackground } from "../components/userPage/Background";
import ProfileEllipse from "../components/homePage/ellipse/ProfileEllipse";
import NoteButton from "../components/userPage/NoteButton";
import { useNavigate } from "react-router-dom";

type HomePageProps = {
  score: number;
};

const UserPage: React.FC<HomePageProps> = ({score}) => {
  let nickname = "디자인마스터";
  const navigate = useNavigate();

  return (
    <Container>
      <Col
        css={css`
          position: relative;
        `}
        alignItems="center"
      >
        <TopBackground>
          <button 
            onClick={() => navigate('/')}
            css={css`
              position: absolute;
              top: 18px;
              right: 16px;
              color: var(--brown0, #9C5D23);
              font-family: Pretendard;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              background: none;
              border: none;
              cursor: pointer;
              padding: 0;
            `}>로그아웃
          </button>
          <div css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 26px;
            `}>
            <ProfileEllipse size="100px" css={css`border: none;`}/>
            <div css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 10px;
            `}>
              <div css={css`
                color: var(--brown0, #9C5D23);
                text-align: center;
                font-family: LeeSeoyun;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              `}>
                {nickname}
              </div>
              <div css={css`
                color: var(--white, #FFF);
                font-family: LeeSeoyun;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              `}>
                {score}점
              </div>
            </div>
          </div>
        </TopBackground>   
      </Col>
      <Col
        css={css`
          position: relative;
        `}
        alignItems="center"
      >
      <BottomBackground>
        <div css={css`
          margin-top: 32px;
          padding: 0 35px 0 35px;
        `}>
          <NoteButton
            title="나의 오답노트"
            to="/correction_note"
            css={css`margin-bottom: 35px;`}
          />
          <NoteButton
            title="나만의 개념노트"
            to="/concept_note"
          />
        </div>
      </BottomBackground> 
      </Col>
    </Container>

    )
}

export default UserPage