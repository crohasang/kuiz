import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import QuizMain from './pages/QuizPage/QuizMain';
import UserPage from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';
import BottomNavigation from './components/bottomNavigation';
import LoginPage from './pages/LoginPage';

//본래의 App Component
const App = () => {
  const location = useLocation();
  const hideBottomNavPaths = ['/login', '/quiz/screen1', '/quiz/screen2', '/quiz/screen3'];
  const shouldHideBottomNav = hideBottomNavPaths.includes(location.pathname);

  //점수 관리
  const [score, setScore] = useState<number>(0);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/quiz/*" element={<QuizMain score={score} setScore={setScore} />} />
        <Route path="/user" element={<UserPage />} />
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
