import {useState, useEffect} from 'react';
import QuizScreen1 from './QuizScreen1'; //양자택일 유형
import QuizScreen2 from './QuizScreen2'; //빈칸 채우기 유형
import quizData from '../../assets/quizData/quiz.json'; // 상대 경로로 JSON 파일 가져오기 (추후 동적 관리를 위해선 다른 방법을 사용해야 함)

import {Quiz} from './types';

import { useNavigate } from 'react-router-dom';


//퀴즈 데이터를 랜덤화 하여 하위 컴포넌트를 내뱉도록 구현된 QuizManager
function QuizManager(props: { score: number; setScore: (score: number) => void }) {
    const [shuffledQuizzes, setShuffledQuizzes] = useState<Quiz[]>([]); //랜덤 문제 목록
    const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0); //현재 퀴즈 인덱스
    const [localScore, setLocalScore] = useState<number>(0); //점수 저장 (추후에 전역 state로 사용해야 할 것 같음)
    const {score, setScore} = props; //props 객체에서 구조 분해 할당

    const navigate = useNavigate(); //버튼 클릭 시 라우팅을 위해 사용

    //랜덤하게 인덱스를 선택하는 함수
    const getRandomIndexes = (length: number, count: number) => {
        const indexes = new Set<number>(); //중복 제거를 위해 Set 사용
        while(indexes.size < count) {
            const randomIndex = Math.floor(Math.random() * length);
            indexes.add(randomIndex);
        }
        return Array.from(indexes); //Set을 배열로 변환
    }

    //랜덤 문제 생성
    useEffect(() => {
        const randomIndexes = getRandomIndexes(quizData.length, 5); // 5개의 랜덤 인덱스 생성
        const selectedQuizzes = randomIndexes.map((index) => quizData[index]); // 인덱스를 기반으로 문제 선택
        setShuffledQuizzes(selectedQuizzes); // 상태에 저장
    }, []);

    //정답 처리 함수
    const handleNext = (isCorrect: boolean) => {
        console.log("handleNext 수행, currentQuizIndex: ", currentQuizIndex);

        //정답이면 점수 증가
        if(isCorrect) {
            setLocalScore((prevScore: number) => prevScore + 10);
        }

        //다음 문제로 이동
        if(currentQuizIndex + 1 < shuffledQuizzes.length) {
            setCurrentQuizIndex((prevIndex: number) => prevIndex + 1);
        } else {
            //마지막 문제를 푼 경우 결과 표시
            alert(`총 ${localScore + (isCorrect ? 10 : 0)}점을 획득했습니다!`); //마지막 정답 반영
            setScore(score+localScore + (isCorrect ? 10 : 0)); //점수 set
            handleReset(); //초기화 및 메인 화면으로 이동
        }
    }

    //초기화 함수
    const handleReset = () => {
        setShuffledQuizzes([]);
        setCurrentQuizIndex(0);
        setLocalScore(0);
        navigate('/quiz'); //퀴즈 메인으로 이동
    }

    //퀴즈를 rendering하는 메소드 renderQuiz
    const renderQuiz = () => {
        // 데이터가 로드되기 전에는 로딩 메시지를 표시
        if (shuffledQuizzes.length === 0) {
            return <div>Loading...</div>; 
        }

        const currentQuiz = shuffledQuizzes[currentQuizIndex];

        //현재 currentQuiz가 존재하지 않는 경우
        if(!currentQuiz)
        {
            return <div>로딩중입니다...</div>;
        }
        
        switch(currentQuiz.type)
        {
            case 'choice': //양자택일 유형의 경우
                return (
                    <QuizScreen1
                        key={currentQuizIndex} // key 추가
                        currentQuizIndex={currentQuizIndex}
                        question={currentQuiz.question}
                        options={currentQuiz.options || []}
                        answer={currentQuiz.answer}
                        explanation={currentQuiz.explanation}
                        onNext={handleNext}
                    />
                );
            case 'fill_blank': //빈칸 채우기 유형의 경우
                return (
                    <QuizScreen2
                        key={currentQuizIndex} // key 추가
                        currentQuizIndex={currentQuizIndex}
                        question={currentQuiz.question}
                        answer={currentQuiz.answer}
                        explanation={currentQuiz.explanation}
                        onNext={handleNext}
                    />
                );
            default:
                return <div>유효한 퀴즈 유형이 아닙니다!</div>;
        }
    }

    //최종적으로 Quiz 화면 출력(renderQuiz() 메소드 활용)
    return (
        <div>{renderQuiz()}</div>
    );
}

export default QuizManager;