import { TopBackground, BottomBackground, Title, Button, Container, FloatingButton } from './quizMain_styles';
import MenuBookIcon from '../../assets/menu_book.svg';
import { Route, Routes, useNavigate } from "react-router-dom";
import QuizScreen1 from './QuizScreen1';

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
        <Button level="1" onClick={() => navigate("/quiz/screen1")}>Level 01</Button>
        <Button level="2" onClick={() => navigate("/quiz/screen2")}>Level 02</Button>
        <Button level="3" onClick={() => navigate("/quiz/screen3")}>Level 03</Button>
      </BottomBackground>
      {/* 플로팅 버튼 */}
      <FloatingButton>
        <img src={MenuBookIcon} alt="Menu Book Icon" />
      </FloatingButton>
    </Container>
  );
}

// QuizMain 관련한 컴포넌트 (하위 퀴즈 화면들을 Route로 우선 연결해 놓았습니다)
function QuizMain() {
  return (
    <Routes>
      <Route path="/" element={<QuizMainContent />} />
      <Route path="/screen1" element={<QuizScreen1 />} />
      <Route path="/screen2" element={<QuizScreen1 />} />
      <Route path="/screen3" element={<QuizScreen1 />} />
    </Routes>
  );
}

export default QuizMain;
