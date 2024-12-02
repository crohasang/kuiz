import {useState, useEffect} from 'react';
import QuizScreen1 from './QuizScreen1'; //양자택일 유형
import QuizScreen2 from './QuizScreen2'; //빈칸 채우기 유형
import quizData from '../../assets/quizData/quiz.json'; // 상대 경로로 JSON 파일 가져오기 (추후 동적 관리를 위해선 다른 방법을 사용해야 함)

import {Quiz} from './types';


//퀴즈 데이터를 랜덤화 하여 하위 컴포넌트를 내뱉도록 구현된 QuizManager
function QuizManager() {
    const [shuffledQuizzes, setShuffledQuizzes] = useState<Quiz[]>([]); //랜덤 문제 목록
    const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(1); //현재 퀴즈 인덱스

    // 문제 섞는 함수 (Fisher-Yates Shuffle 알고리즘)
    const shuffleArray = (array: any[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // 랜덤 문제를 5개 선택
    useEffect(() => {
        //const quizzesWithImages = loadQuizWithImages(quizData); // 이미지 경로 로드
        const shuffled = shuffleArray(quizData); // 문제 섞기
        const selectedQuizzes = shuffled.slice(0, 5); // 상위 5개 선택
        setShuffledQuizzes(selectedQuizzes); // 상태에 저장
    }, []);

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
                        currentQuizIndex={currentQuizIndex}
                        question={currentQuiz.question}
                        options={currentQuiz.options || []}
                        answer={currentQuiz.answer}
                        explanation={currentQuiz.explanation}
                        onNext={() => setCurrentQuizIndex((prev) => prev + 1)}
                    />
                );
            case 'fill_blank': //빈칸 채우기 유형의 경우
                return (
                    <QuizScreen2
                        currentQuizIndex={currentQuizIndex}
                        question={currentQuiz.question}
                        answer={currentQuiz.answer}
                        explanation={currentQuiz.explanation}
                        onNext={() => setCurrentQuizIndex((prev) => prev + 1)}
                    />
                );
            default:
                return <div>유효한 퀴즈 유형이 아닙니다!</div>;
        }
    }

    // 결과 화면 처리
    const renderResult = () => <div>퀴즈가 끝났습니다!</div>;

    //최종적으로 Quiz 화면 출력 (5개 다 풀면, 결과화면(renderResult) 출력)
    return (
        <div>
            {currentQuizIndex <= shuffledQuizzes.length ? renderQuiz() : renderResult()}
        </div>
    );
}

export default QuizManager;