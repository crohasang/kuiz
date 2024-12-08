import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import QuizMain from './pages/QuizPage/QuizMain';
import UserPage from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';
import BottomNavigation from './components/bottomNavigation';
import LoginPage from './pages/LoginPage';
import ConceptNote from './pages/ConceptNote';
import CorrectionNote from './pages/CorrectionNote';

//본래의 App Component
const App = () => {
  const location = useLocation();
  const hideBottomNavPaths = ['/login', '/quiz/screen1', '/quiz/screen2', '/quiz/screen3'];
  const shouldHideBottomNav = hideBottomNavPaths.includes(location.pathname);

  //점수 관리
  const [score, setScore] = useState<number>(()=>{
    const savedScore = localStorage.getItem('score');
    return savedScore ? JSON.parse(savedScore) : 0; // localStorage에 저장된 값이 없으면 0으로 초기화
  }); 

  //오답 문제의 ID를 저장
  const [incorrectQuestionIDs, setIncorrectQuestionIDs] = useState<number[]>(()=>{
    // 초기값으로 localStorage에서 데이터를 로드
    const savedIncorrectIDs = localStorage.getItem('incorrectQuestionIDs');
    return savedIncorrectIDs ? JSON.parse(savedIncorrectIDs) : [];
  }); 
  
  // 점수가 업데이트될 때 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score));
  }, [score]);

  // 오답 ID 추가 메소드인 addIncorrectQuestionID
  const addIncorrectQuestionID = (id: number) => {
    if (!incorrectQuestionIDs.includes(id)) {
      const updatedIDs = [...incorrectQuestionIDs, id];
      setIncorrectQuestionIDs(updatedIDs);
      localStorage.setItem('incorrectQuestionIDs', JSON.stringify(updatedIDs)); // 업데이트된 데이터를 localStorage에 저장
    }
  };

  //HomePage(랭킹 페이지), UserPage(유저 페이지)에 user의 점수를 표시해야 한다
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage score={score}/>} />
        <Route path="/quiz/*" element={<QuizMain score={score} setScore={setScore} addInCorrectQuestionID={addIncorrectQuestionID} />} />
        <Route path="/user" element={<UserPage score={score}/>} />
        <Route path="/correction_note" element={<CorrectionNote />} />
        <Route path ="/concept_note" element={<ConceptNote />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!shouldHideBottomNav && <BottomNavigation />}
    </>
  );
};

//'export default App'으로 그대로 내보낼 경우, 조건부 렌더링을 실현할 수 없더라고요
//대신, AppWrapper로 export하도록 설계되었습니다.
const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
