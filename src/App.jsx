import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/main';
import LandingPage from './pages/landing';
import Landing2 from './pages/landing2'
import Landing3 from './pages/landing3'
import Landing4 from './pages/landing4'
import Landing5 from './pages/landing5'
import Landing6 from './pages/landing6'





function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/landing2" element={<Landing2 />} />
        <Route path="/landing3" element={<Landing3 />} />
        <Route path="/landing4" element={<Landing4 />} />
        <Route path="/landing5" element={<Landing5 />} />
        <Route path="/landing6" element={<Landing6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;