/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  TopBackground,
  BottomBackground,
  ButtonContainer,
  Title,
  Button,
  ExplanationContainer,
} from './quizscreen_styles';
import { Container } from '../../components/common/container/Container';
import { useState, useEffect } from 'react';

//더 나은 디자인에 관한 내용은.. 현재는 dummy data 넣어 놓음
import PrimaryButton from '../../components/common/button/PrimaryButton';

//두 디자인 중 더 나은 디자인을 고르는 퀴즈 유형(QuizScreen1)
function QuizScreen1({
  currentQuizIndex,
  question,
  options,
  answer,
  explanation,
  onNext,
}: {
  currentQuizIndex: number;
  question: string;
  options: {id: string, type: 'image' | 'text', content: string}[]; //옵션
  answer: string;
  explanation: string;
  onNext: () => void;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null); //사용자가 고른 답에 관한 값을 가지고 있는 selectedAnswer
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); //정/오답 여부에 대한 값을 가지고 있는 isCorrect
  const [isEnabled, setIsEnabled] = useState<boolean>(true); // 버튼 활성화 여부에 대한 값을 가지고 있는 isDisabled
  const [showExplanation, setShowExplanation] = useState<boolean>(false); // 해설 표시 여부

  //답을 선택했을 때, 즉 selectedAnswer의 값이 바뀌었을 때 해당 useEffect()문을 수행토록 한다
  useEffect(() => {
    // 선택된 답안이 있을 때만 정답 여부를 업데이트
    if (selectedAnswer !== null) {
      setIsCorrect(selectedAnswer === answer); //정답 확인
      setIsEnabled(false); // 답변이 선택되면 버튼 비활성화
      setShowExplanation(true); // 해설 표시
    }
  }, [selectedAnswer]);

  //텍스트 색깔을 isCorrect 상태에 따라 정하는 method
  const getTitleTextColor = () => {
    if (isCorrect === null) {
      return '#ffffff'; //기본 색상(흰색)
    }
    return isCorrect ? '#007BFF' : '#FF0000'; // 정답: 파란색, 오답: 빨간색
  };

  //props로 넘어온 question 등의 멘트를 동적으로 처리하기 위한 메소드 getTitleText
  const getTitleText = () => {
    if (isCorrect === null) return question;
    return isCorrect ? '정답입니다!' : '오답입니다!';
  };

  //둘 중 하나를 선택했을 시 클릭 이벤트 처리하는 메소드 handleOptionClick
  const handleOptionClick = (id: string) => {
    if (isEnabled) {
      //버튼이 활성화된 경우에만 클릭 이벤트를 수행
      setSelectedAnswer(id);
    }
  };

  return (
    <Container isBottomNavigation={false}>
      {/* 상단 곡선 배경 */}
      <TopBackground className={selectedAnswer !== null ? 'top-background-animate' : ''}>
        <Title font="Pretendard">{currentQuizIndex}/5</Title>
        <Title color={getTitleTextColor()}>{getTitleText()}</Title>
      </TopBackground>
      {/* 하단 배경 및 콘텐츠 */}
      <BottomBackground>
        <ButtonContainer>
        {options.map((option, index) => (
            <Button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className={
                selectedAnswer === null ? '' //선택되지 않았을 때
                  : answer === option.id
                  ? index === 0
                    ? 'left-correct'
                    : 'right-correct' //위치에 따른 정답
                  : index === 0
                  ? 'left-incorrect'
                  : 'right-incorrect' //위치에 따른 오답
              }
            >
              {option.type === 'image' ? (
                <img
                  src={option.content}
                  alt={`Option ${option.id}`}
                />
              ) : (
                <div
                  style={{
                    fontSize: '1.2rem', // 텍스트 크기
                    fontWeight: 'bold', // 텍스트 굵기
                    color: '#5a3220', // 텍스트 색상
                  }}
                >
                  {option.content}
                </div>
              )}
              <span className="overlay-text">{option.id}</span> {/* 버튼 상단 ID 표시 */}
            </Button>
          ))}
        </ButtonContainer>
      </BottomBackground>
      {/* 해설 및 다음 버튼 */}
      {showExplanation && (
        <ExplanationContainer>
          <span className="explanation-title">해설</span>
          <div className="divider" />
          <span className="explanation">{explanation}</span>
          <PrimaryButton
            title="다음"
            onClick={onNext}
            css={css`
              margin: 15px 0 16px;
            `}
          />
        </ExplanationContainer>
      )}
    </Container>
  );
}

export default QuizScreen1;
