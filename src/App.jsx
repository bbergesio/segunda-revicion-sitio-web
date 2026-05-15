import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import VideoBanner from './components/VideoBanner/VideoBanner';
import Soluciones from './components/Soluciones/Soluciones';
import Resultados from './components/Resultados/Resultados';
import Diferenciadores from './components/Diferenciadores/Diferenciadores';
import MapaPuntos from './components/MapaPuntos/MapaPuntos';
import Integraciones from './components/Integraciones/Integraciones';
import Marcas from './components/Marcas/Marcas';
import Sustentabilidad from './components/Sustentabilidad/Sustentabilidad';
import Contacto from './components/Contacto/Contacto';
import SustentabilidadPage from './pages/Sustentabilidad/SustentabilidadPage';
import EmpresasPage from './pages/Empresas/EmpresasPage';
import EmprendedoresPage from './pages/Emprendedores/EmprendedoresPage';
import NosotrosPage from './pages/Nosotros/NosotrosPage';
import PuntoPickitPage from './pages/PuntoPickit/PuntoPickitPage';
import PrivacidadPage from './pages/Legales/PrivacidadPage';
import TerminosPage from './pages/Legales/TerminosPage';
import BlogPage from './pages/Blog/BlogPage';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import './App.css';

const LandingPage = () => (
  <>
    <Hero />
    <VideoBanner />
    <Soluciones />
    <Resultados />
    <Diferenciadores />
    <MapaPuntos />
    <Integraciones />
    <Marcas />
    <Sustentabilidad />
    <Contacto />
  </>
);

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sustentabilidad" element={<SustentabilidadPage />} />
            <Route path="/empresas" element={<EmpresasPage />} />
            <Route path="/emprendedores" element={<EmprendedoresPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/punto-pickit" element={<PuntoPickitPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/privacidad" element={<PrivacidadPage />} />
            <Route path="/terminos" element={<TerminosPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
