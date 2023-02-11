import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Homepage from "./pages/Homepage";
import Servpage from "./pages/Servpage";
import Consultantpage from "./pages/Consultantpage";
import Hybridpage from "./pages/Hybridpage";
import Hybridseeds from "./components/Hybridseeds";
import Aihelperpage from "./pages/Aihelperpage";
import RGuidepage from "./pages/RGuidepage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/hybridpage' element={<Hybridpage />} />
        <Route path='/servpage' element={<Servpage />} />
        <Route path='/aihelper' element={<Aihelperpage />} />
        <Route path='/rguide' element={<RGuidepage />} />
        <Route path='/consultantpage' element={<Consultantpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
