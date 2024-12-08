/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RoundedBackground from '../components/homePage/RoundedBackground';
import ProfileEllipse from '../components/homePage/ellipse/ProfileEllipse';
import Line from '../assets/line.svg?react';
import RankingCard from '../components/homePage/rankingCard/RankingCard';
import { Container } from '../components/common/container/Container';
import { Col, Row } from '../components/common/flex/Flex';
import RankingRow from '../components/homePage/rankingRow/RankingRow';

type HomePageProps = {
  score: number;
};

const HomePage: React.FC<HomePageProps> = ({score}) => {
  return (
    <Container>
      <Col
        css={css`
          position: relative;
        `}
        alignItems="center"
      >
        <RoundedBackground>
          <div
            css={css`
              position: absolute;
              top: -35px;
              left: 50%;
              transform: translateX(-50%);
              z-index: 2;
            `}
          >
            <ProfileEllipse size="70px" />
          </div>
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
          <Row justifyContent="center" padding={'62px 0 32px'} gap={8}>
            <RankingCard rank={2} title="UI는심플하게" score={80} />
            <RankingCard
              css={css`
                margin-top: -30px;
              `}
              rank={1}
              title="과탑은 나의것"
              score={90}
            />
            <RankingCard rank={3} title="디자인마스터" score={score} />
          </Row>
          <div
            css={css`
              margin-top: 22px;
              display: flex;
              justify-content: center;
            `}
          >
            <Line />
          </div>
          <Col
            css={css`
              margin-top: 10px;
              width: 100%;
              gap: 10px;
            `}
            alignItems="center"
          >
            <RankingRow rank={4} nickname="사용자아이디" score={30} />
            <RankingRow rank={5} nickname="사용자아이디" score={20} />
            <RankingRow rank={6} nickname="사용자아이디" score={10} />
            <RankingRow rank={7} nickname="사용자아이디" score={0} />
            <RankingRow rank={8} nickname="사용자아이디" score={0} />
            <RankingRow rank={9} nickname="사용자아이디" score={0} />
            <RankingRow rank={10} nickname="사용자아이디" score={0} />
          </Col>
        </RoundedBackground>
        
      </Col>
    </Container>
  );
};

export default HomePage;
