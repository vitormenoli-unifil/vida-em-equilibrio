import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import TemaProjeto from './pages/TemaProjeto';
import Comunidade from './pages/Comunidade';
import AlimentacaoSaudavel from './pages/Common/AlimentacaoSaudavel';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/tema-do-projeto" element={<TemaProjeto />} />
        <Route path="/comunidade" element={<Comunidade />} />
        <Route path="/alimentacao-saudavel" element={<AlimentacaoSaudavel/>} />
      </Routes>
    </Router>
  );
}

export default App;