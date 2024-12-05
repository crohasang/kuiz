/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from '../components/common/container/Container';
import { Col } from '../components/common/flex/Flex';

const ConceptNote = () => {
  return (

      <Container css={css`
        width: 360px;
        height: 800px;
      `}>
        <Col
          css={css`
            position: relative;
            width: 100%;
            height: 100%;
                    background: var(--brown3, #FBE5D0);

          `}
          alignItems="center"
        >
            <div 
              css={css`
                margin-top: 69px;
                color: var(--brown0, #9C5D23);
                text-align: center;
                font-family: LeeSeoyun;
                font-size: 25px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;`}>개념노트</div>
        </Col>
      </Container>
      )
}

export default ConceptNote;