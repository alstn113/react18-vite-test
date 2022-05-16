import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ArticleDetail from './pages/ArticleDetail';
import ArticlePage from './pages/Article';
import WritePage from './pages/Write';
import SettingPage from './pages/Setting';
import NotFoundPage from './pages/NotFound';
import SearchPage from './pages/Search';
import Core from './components/Core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Core />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/@:username" element={<ArticlePage />} />
        <Route path="/@:username/:articleId" element={<ArticleDetail />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/search" element={<SearchPage />} />

        {/* catch all */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
