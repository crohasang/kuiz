/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  TopBackground,
  BottomBackground,
  QuestionContainer,
  Title,
  InputBox,
  InputContainer,
  ExplanationContainer,
} from './quizscreen_styles';
import { Container } from '../../components/common/container/Container';
import { useState, useEffect } from 'react';


import PrimaryButton from '../../components/common/button/PrimaryButton';


//빈칸 채우기 퀴즈 유형(QuizScreen2)
function QuizScreen2({
    currentQuizIndex,
    question,
    answer,
    explanation,
    onNext,
} : {
  currentQuizIndex: number;
  question: string;
  answer: string;
  explanation: string;
  onNext: () => void;
}) {
    const [inputAnswer, setInputAnswer] = useState<string | null>(null); //사용자가 입력한 답에 관한 값을 가지고 있는 selectedAnswer
    const [isSubmit, setIsSubmit] = useState<boolean | null>(null); //답 제출 여부에 관한 state
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null); //정/오답 여부에 대한 값을 가지고 있는 isCorrect
    const [showExplanation, setShowExplanation] = useState<boolean>(false); // 해설 표시 여부

    //답을 입력했을 때, 즉 inputAnswer의 값이 바뀌었을 때만 해당 useEffect()문을 수행토록 한다
    useEffect(() => {
        //입력된 답안이 있을 때만(inputAnswer가 null이 아닐 때만) 정답 여부를 업데이트
        if (inputAnswer !== null) {
            setShowExplanation(true); // 해설 표시 (여기선 이와 함께 답도 표시될 것입니다)
            console.log("useEffect문 실행됨(2), if문도 들어옴");
        }
    }, [isSubmit]);

    //텍스트 색깔을 isCorrect 상태에 따라 정하는 method
    const getTitleTextColor = () => {
        if (isCorrect === null) {
            return '#ffffff'; //기본 색상(흰색)
        }
        return isCorrect ? '#007BFF' : '#FF0000'; // 정답: 파란색, 오답: 빨간색
    };

    //'빈칸에 들어갈 단어는 무엇일까요?' 등의 멘트를 동적으로 처리하기 위한 메소드 getTitleText
    const getTitleText = () => {
        if (isCorrect === null) return '빈칸에 들어갈 단어는 무엇일까요?';
        return isCorrect ? '정답입니다!' : '오답입니다!';
    };

    //'제출' 버튼을 클릭했을 시 수행하는 이벤트를 처리하는 메소드 handleSubmitClick
    const handleSubmitClick = () => {
        //inputAnswer가 설정되어 있을 때만..
        if(inputAnswer !== null)
        {
            setIsSubmit(true); //제출 여부를 true로 수정
            setIsCorrect(inputAnswer === answer); //정답의 유무를 판단하여 isCorrect state를 설정
        } 
        else 
        {
            alert('답을 입력해 주세요'); //답 입력해 달라고 독촉 (alert창 띄우기)
        }
    }

    return (
        <Container isBottomNavigation={false}>
            {/* 상단 곡선 배경 */}
            <TopBackground className={isCorrect !== null ? 'top-background-animate' : ''}>
                <Title font="Pretendard">{currentQuizIndex}/5</Title>
                <Title color={getTitleTextColor()}>{getTitleText()}</Title>
            </TopBackground>
            {/* 하단 배경 및 문제 컨텐츠 */}
            <BottomBackground>
                <QuestionContainer>
                    <span className="question">{question}</span>
                </QuestionContainer>
                <InputContainer>
                {
                    !showExplanation ? (
                        <>
                        <span className="inputLabel">입력 :</span>
                        <InputBox
                            type="text"
                            value={inputAnswer || ""}
                            onChange={(e) => setInputAnswer(e.target.value)}   
                        />
                        </>
                    ) : (
                        <span className="inputLabel">정답 : {answer}</span>
                    )
                }
                </InputContainer>
            </BottomBackground>
            {/* 해설 및 '다음' 혹은 '제출' 버튼 */}
            <ExplanationContainer>
                {showExplanation ? (
                    <>
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
                    </>
                ) : (
                    <PrimaryButton
                        title="제출"
                        onClick={handleSubmitClick}
                        css={css`
                            margin: 15px 0 16px;
                        `}
                    />
                )}
            </ExplanationContainer>
        </Container>
    );
}

export default QuizScreen2;