import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateTemplatePage from './pages/CreateTemplatePage';
import CampaignPage from './pages/CampaignPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SingleCampaignPage from './pages/SingleCampaignPage';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/templates/create' element={<CreateTemplatePage />} />
        <Route path='/campaign' element={<CampaignPage />} />
        <Route path='/analytics' element={<AnalyticsPage />} />
        <Route path='/analytics/:name' element={<SingleCampaignPage />} />
      </Routes>
    </div>
  );
}

export default App;
