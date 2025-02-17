import Login from './components/layout/login/Login';
import LiquidationSimulator from './components/layout/liquidation/LiquidationSimulator';
import AdminDashborad from './components/layout/admin/AdminDashboard';
import Users from './components/layout/users/Users'
import EditAdmin from './components/layout/admin/Edit'
import AdminResults from './components/layout/admin/AdminResults.jsx'
import DataAnalysis from './components/layout/DataAnalysis/DataAnalysis'
import HeadNav from './components/layout/Header/nav.jsx';
//modulos de firebase
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      {isAuthenticated && <HeadNav setIsAuthenticated={setIsAuthenticated} />} {/* pasar setIsAuthenticated como una prop */}
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/liquidacion" element={isAuthenticated ? <LiquidationSimulator /> : <Navigate to="/" />} />
        <Route path="/admindash" element={isAuthenticated ? <AdminDashborad /> : <Navigate to="/" />} />
        <Route path="/analisis" element={isAuthenticated ? <DataAnalysis /> : <Navigate to="/" />} />
        <Route path="/administrar" element={isAuthenticated ? <Users /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
export default App;