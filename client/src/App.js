import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateTemplatePage from './pages/CreateTemplatePage';
import CampaignPage from './pages/CampaignPage';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/templates/create' element={<CreateTemplatePage />} />
        <Route path='/campaign' element={<CampaignPage />} />
      </Routes>
    </div>
  );
}

export default App;
