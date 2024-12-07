import { TopBackground, BottomBackground, Title, Button, FloatingButton } from './quizMain_styles';
import { Container } from '../../components/common/container/Container';
import MenuBookIcon from '../../assets/menu_book.svg';
import { Route, Routes, useNavigate } from 'react-router-dom';
import QuizManager from './QuizManager';
import {useEffect} from 'react';

//Quiz 메인 페이지
function QuizMainContent() {

  const navigate = useNavigate(); //버튼 클릭 시 라우팅을 위해 사용

  return (
    <Container>
      <TopBackground>
        <Title>
          어떤 레벨의 퀴즈를 풀지 <br />
          선택해 주세요!
        </Title>
      </TopBackground>
      <BottomBackground>
        <Button level="1" onClick={() => navigate('/quiz/screen1')}>
          Level 01
        </Button>
        <Button level="2" onClick={() => navigate('/quiz/screen2')}>
          Level 02
        </Button>
        <Button level="3" onClick={() => navigate('/quiz/screen3')}>
          Level 03
        </Button>
      </BottomBackground>
      {/* 플로팅 버튼 */}
      <FloatingButton>
        <img src={MenuBookIcon} alt="Menu Book Icon" />
      </FloatingButton>
    </Container>
  );
}

// QuizMain 관련한 컴포넌트 (하위 퀴즈 화면들을 Route로 우선 연결해 놓았습니다)
function QuizMain(props: { score: number; setScore: (score: number) => void; addInCorrectQuestionID: (id:number) => void; }) {

  const {score, setScore, addInCorrectQuestionID} = props; //props 객체에서 구조 분해 할당
  
  //테스트용 코드
  useEffect(()=> {
    console.log('현재 점수는..', score);
  }, [])

  return (
    <Routes>
      <Route path="/" element={<QuizMainContent/>} />
      <Route path="/screen1" element={<QuizManager score={score} setScore={setScore} addInCorrectQuestionID={addInCorrectQuestionID}/>} />
      <Route path="/screen2" element={<QuizManager score={score} setScore={setScore} addInCorrectQuestionID={addInCorrectQuestionID}/>} />
      <Route path="/screen3" element={<QuizManager score={score} setScore={setScore} addInCorrectQuestionID={addInCorrectQuestionID}/>} />
    </Routes>
  );
}

export default QuizMain;
