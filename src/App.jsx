import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import TemaProjeto from './pages/TemaProjeto';
import Comunidade from './pages/Comunidade';
import AlimentacaoSaudavel from './pages/Common/AlimentacaoSaudavel';
import AtividadesFisicas from './pages/Common/AtividadesFisicas';
import BemEstarMental from './pages/Common/BemEstarMental';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/tema-do-projeto" element={<TemaProjeto />} />
        <Route path="/comunidade" element={<Comunidade />} />
        <Route path="/alimentacao-saudavel" element={<AlimentacaoSaudavel/>} />
        <Route path="/atividades-fisicas" element={<AtividadesFisicas/>} />
        <Route path="/bem-estar-mental" element={<BemEstarMental/>} />
      </Routes>
    </Router>
  );
}

export default App;