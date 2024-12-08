/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Container } from '../components/common/container/Container';
import { Col } from '../components/common/flex/Flex';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import quizData from '../assets/quizData/quiz.json';

const CorrectionNote = () => {
  const navigate = useNavigate();
  const [incorrectQuestions, setIncorrectQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    // localStorage에서 오답 문제 ID들을 가져옴
    const incorrectIDs = JSON.parse(localStorage.getItem('incorrectQuestionIDs') || '[]');
    
    // quiz.json에서 해당하는 문제들을 찾아서 설정
    const questions = quizData.filter((quiz: any) => 
      incorrectIDs.includes(quiz.id)
    );
    setIncorrectQuestions(questions);
    if (questions.length > 0) {
      setCurrentIndex(0);
    }
  }, []);

  const handleComplete = () => {
    navigate(-1);
  };

  const currentQuestion = incorrectQuestions[currentIndex];

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
        <div css={css`
          margin-top: 40px;
          color: var(--brown2, #E39E5F);
          text-align: center;
          font-family: Pretendard;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        `}>
          {incorrectQuestions.length > 0 ? `${currentIndex + 1} / ${incorrectQuestions.length}` : '0 / 0'}
        </div>
        <div 
          css={css`
            margin-top: 10px;
            color: var(--brown0, #9C5D23);
            text-align: center;
            font-family: LeeSeoyun;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          `}
        >
          오답노트
        </div>

        <div css={css`
          width: 90%;
          height: 600px;
          border: none;
          padding: 20px;
        `}>
          {incorrectQuestions.length === 0 ? (
            <div css={css`
              text-align: center;
              color: #666;
              margin-top: 20px;
            `}>
              오답이 없습니다.
            </div>
          ) : currentQuestion ? (
            <div
              css={css`
                margin-bottom: 20px;
                padding: 15px;
                border: none;
              `}
            >
              <div css={css`
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                padding: 20px;
                @media (min-width: 768px) {
                  align-items: center;
                }
              `}>
                <p css={css`
                  color: var(--brown0, #9C5D23);
                  font-family: Pretendard;
                  font-size: 16px;
                  margin: 0 0 20px 0;
                  max-width: 800px;
                  width: 100%;
                  @media (min-width: 768px) {
                    font-size: 18px;
                    text-align: center;
                  }
                `}>{currentQuestion.question}</p>
                
                <div css={css`
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                  width: 100%;
                  max-width: 800px;
                  margin-bottom: 30px;
                  @media (min-width: 768px) {
                    margin-bottom: 40px;
                  }
                `}>
                  {currentQuestion.options && currentQuestion.options.map((option: any) => (
                    <div key={option.id}>
                      {option.type === 'image' && (
                        <div css={css`
                          width: 130px;
                          height: 180px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          padding: 10px;
                          @media (min-width: 768px) {
                            width: 200px;
                            height: 250px;
                          }
                        `}>
                          <img 
                            src={option.content} 
                            alt={`Option ${option.id}`}
                            css={css`
                              height: 100%;
                              max-width: 120%;
                              object-fit: contain;
                            `}
                          />
                        </div>
                      )}
                      {option.type === 'text' && (
                        <div css={css`
                          margin: 10px 0;
                          color: #9C5D23;
                          font-family: Pretendard;
                          font-size: 16px;
                          @media (min-width: 768px) {
                            font-size: 18px;
                          }
                        `}>
                          {option.id}. {option.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div css={css`
                  width: 100%;
                  max-width: 800px;
                `}>
                  <div css={css`
                    margin-top: 20px;
                    color: var(--brown0, #9C5D23);
                    text-align: left;
                    font-family: Pretendard;
                    font-size: 16px;
                    font-weight: 700;
                    @media (min-width: 768px) {
                      font-size: 18px;
                    }
                  `}>
                    해설
                  </div>
                  <div css={css`
                    margin-top: 10px;
                    width: 100%;
                    max-width: 300px;
                    height: 1px;
                    background: var(--brown0, #9C5D23);
                  `} />
                  <div css={css`
                    margin-top: 14px;
                    color: var(--brown0, #9C5D23);
                    font-family: Pretendard;
                    font-size: 16px;
                    line-height: 1.6;
                    @media (min-width: 768px) {
                      font-size: 18px;
                    }
                  `}>
                    정답: {currentQuestion.answer === 'A' ? '왼쪽' : '오른쪽'}
                    <br/>
                    <br/>
                    {currentQuestion.explanation}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <button
          onClick={() => {
            if (currentIndex === incorrectQuestions.length - 1) {
              handleComplete();
            } else {
              setCurrentIndex(currentIndex + 1);
            }
          }}
          css={css`
            position: absolute;
            bottom: 20px;
            width: 328px;
            height: 50px;
            flex-shrink: 0;
            border-radius: 8px;
            background: var(--brown2, #E39E5F);
            cursor: pointer;
          `}
        >
            <div css={css`
            color: var(--white, #FFF);
            text-align: center;
            font-family: Pretendard;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            `}>
            {currentIndex === incorrectQuestions.length - 1 ? '완료' : '다음'}
            </div>
        </button>
      </Col>
    </Container>
  );
};

export default CorrectionNote;