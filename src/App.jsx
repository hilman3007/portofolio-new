import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/main';
import LandingPage from './components/landing';
import Landing2 from './components/landing2'
import Landing3 from './components/landing3'
import Landing4 from './components/landing4'
import Landing5 from './components/landing5'
import Landing6 from './components/landing6'





function App() {
  return (
    <BrowserRouter>
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