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
import option1 from '../../assets/correct_UI.png';
import option2 from '../../assets/uncorrect_UI.png';
import PrimaryButton from '../../components/common/button/PrimaryButton';

//두 디자인 중 더 나은 디자인을 고르는 퀴즈 유형(QuizScreen1)
function QuizScreen1() {
  //correctAnswer(정답)의 경우, 추후 데이터를 받아와서 useEffect()를 이용해서 지속적으로 업데이트할 것입니다
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null); //정답에 관한 값을 가지고 있는 correctAnswer
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null); //사용자가 고른 답에 관한 값을 가지고 있는 selectedAnswer
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); //정/오답 여부에 대한 값을 가지고 있는 isCorrect
  const [isEnabled, setIsEnabled] = useState<boolean>(true); // 버튼 활성화 여부에 대한 값을 가지고 있는 isDisabled
  const [showExplanation, setShowExplanation] = useState<boolean>(false); // 해설 표시 여부
  const [explanation, setExplanation] = useState<string>(''); // 해설 내용

  //렌더링 되는 초기에 정답이 어떤 옵션인지 set할 것이다. (여기서는 정답이 'A'인 것으로 상정)
  useEffect(() => {
    setCorrectAnswer('A');
  }, []);

  //답을 선택했을 때, 즉 selectedAnswer의 값이 바뀌었을 때 해당 useEffect()문을 수행토록 한다
  useEffect(() => {
    // 선택된 답안이 있을 때만 정답 여부를 업데이트
    if (selectedAnswer !== null) {
      setIsCorrect(selectedAnswer === correctAnswer);
      setIsEnabled(false); // 답변이 선택되면 버튼 비활성화
      setShowExplanation(true); // 해설 표시
      setExplanation(
        '서로 관련성 있는 요소는 가깝게 배치하는 것이 좋습니다. 근접한 객체들은 동일한 개체로 인식됩니다. 디자인은 사용성을 높이기 위해 직관적이고 명확해야 합니다.'
      ); //해설 내용 설정(현재는 dummy data)
    }
  }, [selectedAnswer]);

  //텍스트 색깔을 isCorrect 상태에 따라 정하는 method
  const getTitleTextColor = () => {
    if (isCorrect === null) {
      return '#ffffff'; //기본 색상(흰색)
    }
    return isCorrect ? '#007BFF' : '#FF0000'; // 정답: 파란색, 오답: 빨간색
  };

  //'어떤 것이 올바른 디자인일까요?' 등의 멘트를 동적으로 처리하기 위한 메소드 getTitleText
  const getTitleText = () => {
    if (isCorrect === null) return '어떤 것이 올바른 디자인일까요?';
    return isCorrect ? '정답입니다!' : '오답입니다!';
  };

  //둘 중 하나를 선택했을 시 클릭 이벤트 처리하는 메소드 handleOptionClick
  const handleOptionClick = (option: string) => {
    if (isEnabled) {
      //버튼이 활성화된 경우에만 클릭 이벤트를 수행
      setSelectedAnswer(option);
    }
  };

  //'다음' 버튼을 클릭했을 시 다음 화면으로 넘어가는 이벤트를 처리하는 메소드 handleNextClick
  const handleNextClick = () => {
    //다음 화면으로 넘어가는 로직 추가 (현재는 로그만 출력하도록 함)
    console.log('다음 화면으로 이동');
    //추후 라우터를 활용해 다음 화면으로 이동 로직 구현
  };

  return (
    <Container isBottomNavigation={false}>
      {/* 상단 곡선 배경 */}
      <TopBackground className={selectedAnswer !== null ? 'top-background-animate' : ''}>
        <Title font="Pretendard">2/5</Title>
        <Title color={getTitleTextColor()}>{getTitleText()}</Title>
      </TopBackground>
      {/* 하단 배경 및 콘텐츠 */}
      <BottomBackground>
        <ButtonContainer>
          <Button
            style={{
              backgroundImage: `url(${option1})`,
              backgroundSize: '100% 100%',
              pointerEvents: isEnabled ? 'auto' : 'none',
            }}
            onClick={() => handleOptionClick('A')}
            className={
              selectedAnswer === null ? '' : correctAnswer === 'A' ? 'correct' : 'incorrect'
            } //정답이 'A' 옵션인 경우 'correct', 아닌 경우 'incorrect'를 className으로 넘긴다
          >
            <span className="overlay-text">A</span>
          </Button>
          <Button
            style={{
              backgroundImage: `url(${option2})`,
              backgroundSize: '100% 100%',
              pointerEvents: isEnabled ? 'auto' : 'none',
            }}
            onClick={() => handleOptionClick('B')}
            className={
              selectedAnswer === null ? '' : correctAnswer === 'B' ? 'correct' : 'incorrect'
            } //정답이 'B' 옵션인 경우 'correct', 아닌 경우 'incorrect'를 className으로 넘긴다
          >
            <span className="overlay-text">B</span>
          </Button>
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
            onClick={handleNextClick}
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
