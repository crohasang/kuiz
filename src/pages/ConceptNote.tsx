/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from '../components/common/container/Container';
import { Col } from '../components/common/flex/Flex';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import conceptData from '../assets/conceptData/concept.json';

const ConceptNote = () => {
  const navigate = useNavigate();
  const [selectedConcept, setSelectedConcept] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const concepts = conceptData.concepts;
  const currentIndex = concepts.findIndex(concept => concept.id === selectedConcept);
  const isLastConcept = currentIndex === concepts.length - 1;
  const selectedConceptData = concepts.find(concept => concept.id === selectedConcept);

  const handleComplete = () => {
    navigate(-1);
  };

  const handleNext = () => {
    if (currentIndex < concepts.length - 1) {
      setSelectedConcept(concepts[currentIndex + 1].id);
    }
  };

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
            line-height: normal;
          `}>
          개념노트
        </div>
        
        <div css={css`
          margin-top: 120px;
          position: relative;
          width: 80%;
        `}>
          <select
            value={selectedConcept}
            onChange={(e) => setSelectedConcept(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
            css={css`
              width: 100%;
              padding: 10px;
              padding-right: 30px;
              border: none;
              background: none;
              color: var(--brown0, #9C5D23);
              text-align: center;
              font-family: Pretendard;
              font-size: 18px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              cursor: pointer;
              appearance: none;
              &:focus {
                outline: none;
              }
            `}
          >
            {!isOpen && <option value="">개념을 선택하세요</option>}
            {concepts.map((concept) => (
              <option key={concept.id} value={concept.id}>
                {concept.question}
              </option>
            ))}
          </select>
          <div css={css`
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%) ${isOpen ? 'rotate(0)' : 'rotate(180deg)'};
            transition: transform 0.3s ease;
            pointer-events: none;
            color: var(--brown0, #9C5D23);
          `}>
            ▼
          </div>
          <div css={css`
            width: 100%;
            height: 1px;
            background: var(--brown0, #9C5D23);
            margin: 8px 0 0;
          `} />
        </div>

        {selectedConceptData && (
          <>
            <div css={css`
              margin-top: 31px;
              width: 80%;
              text-align: center;
            `}>
              <div css={css`
                color: var(--brown0, #9C5D23);
                font-family: Pretendard;
                font-size: 16px;
                line-height: 1.5;
                white-space: pre-wrap;
                text-align: left;
              `}>
                {selectedConceptData.answer}
              </div>
            </div>
            <button
              onClick={isLastConcept ? handleComplete : handleNext}
              css={css`
                position: absolute;
                bottom: 20px;
                width: 328px;
                height: 50px;
                flex-shrink: 0;
                border-radius: 8px;
                background: var(--brown2, #E39E5F);
                border: none;
                color: var(--white, #FFF);
                text-align: center;
                font-family: Pretendard;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                cursor: pointer;

                &:hover {
                  opacity: 0.9;
                }
              `}
            >
              {isLastConcept ? '완료' : '다음'}
            </button>
          </>
        )}
      </Col>
    </Container>
  );
}

export default ConceptNote;