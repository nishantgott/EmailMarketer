import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateTemplatePage from './pages/CreateTemplatePage';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/templates/create' element={<CreateTemplatePage />} />

      </Routes>
    </div>
  );
}

export default App;
