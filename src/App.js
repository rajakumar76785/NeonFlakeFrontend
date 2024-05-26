import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FileUploadPage from './pages/FileUploadPage'
import ShowVideoPage from './pages/ShowVideoPage';
import ShowFilesPage from './pages/ShowFilesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FileUploadPage />} />
        <Route path="/list" element={<ShowFilesPage />} />
        <Route path="/video/:id" element={<ShowVideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
