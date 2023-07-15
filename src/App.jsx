import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// importacion de paginas
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
// importacion componentes
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return <div className='overflow-hidden select-none'>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  </div>;
};

export default App;
