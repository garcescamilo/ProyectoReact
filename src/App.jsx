import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import LiquidationSimulator from './components/LiquidationSimulator';
import AdminDashboard from './components/AdminDashboard';
import DataAnalysis from './components/DataAnalysis';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/liquidation" element={<LiquidationSimulator />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/analysis" element={<DataAnalysis />} />
      </Routes>
    </Router>
  );
}

export default App;
