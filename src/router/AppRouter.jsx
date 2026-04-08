import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import AssessmentEnginePage from '../pages/assessment/AssessmentEnginePage'
import AssessmentHomePage from '../pages/assessment/AssessmentHomePage'
import FeedbackPage from '../pages/feedback/FeedbackPage'
import HomePage from '../pages/home/HomePage'
import EngineWorksPage from '../pages/learning/EngineWorksPage'
import LearningEnginePage from '../pages/learning/LearningEnginePage'
import LearningHomePage from '../pages/learning/LearningHomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/learning" element={<LearningHomePage />} />
        <Route path="/learning/:engine" element={<LearningEnginePage />} />
        <Route path="/works/:engine" element={<EngineWorksPage />} />
        <Route path="/assessment" element={<AssessmentHomePage />} />
        <Route path="/assessment/:engine" element={<AssessmentEnginePage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default AppRouter
