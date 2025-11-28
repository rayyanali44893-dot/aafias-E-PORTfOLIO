import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CompetencyDetail from './pages/CompetencyDetail';
import FullPortfolio from './pages/FullPortfolio';

const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => ({ pathname: window.location.hash }), []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* The Print View does NOT use the standard layout (sidebar/header) to keep it clean */}
        <Route path="/print" element={<FullPortfolio />} />
        
        {/* Standard Website Routes */}
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/competency/:id" element={<CompetencyDetail />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </HashRouter>
  );
};

export default App;