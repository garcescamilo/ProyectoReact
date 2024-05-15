import Login from './components/layout/login/Login';
import LiquidationSimulator from './components/layout/liquidation/LiquidationSimulator';
import AdminDashborad from './components/layout/admin/AdminDashboard';
import CreateAdmin from './components/layout/admin/Create'
import EditAdmin from './components/layout/admin/Edit'
import AdminResults from './components/layout/admin/AdminResults.jsx'
import DataAnalysis from './components/layout/DataAnalysis/DataAnalysis'
import HeadNav from './components/layout/Header/nav.jsx';
//modulos de firebase
import appFirebase from '../back/credenciales.js'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const auth = getAuth(appFirebase)

function App() {
  const [usuario, setUsuario] = useState(null);
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })
  return (

    <Router>
      <HeadNav />

      <Routes>

        <Route path="/" element={usuario ? <LiquidationSimulator /> : <Login />} />
        <Route path='/liquidacion' element={<LiquidationSimulator />} />
        <Route path='/admindash' element={<AdminDashborad />} />
        <Route path='/analisis' element={<DataAnalysis />} />

      </Routes>


    </Router>

  );
}

export default App;
