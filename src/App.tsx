import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import FormCategoria from './components/categorias/formcategorias/FormCategorias';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria';

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/listarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>

      {/* <Navbar />
      { <Home />}
      { <Footer /> } */}
    </>
  );
}

export default App;