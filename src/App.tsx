import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";

import BottomNavigation from "./components/bottomNavigation";


const App = () => {
  return (
    <BrowserRouter>
      <div className = "app">
        <main className="main-content">
          <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path = "/quiz" element = {<QuizPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <BottomNavigation />
      </div>
    </BrowserRouter>
  );
};

export default App