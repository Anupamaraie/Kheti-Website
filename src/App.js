import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Homepage from "./pages/Homepage";
import Patientpage from "./pages/Patientpage";
import Doctorlistpage from "./pages/Doctorlistpage";
import Pharmacypage from "./pages/Pharmacypage";
import Pharmacy from "./components/Pharmacy";
import Aihelperpage from "./pages/Aihelperpage";
// import Chatpage from "./pages/Chatpage";
// import Signuppage from "./pages/Signuppage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/pharmacy' element={<Pharmacypage />} />
        {/* <Route path='/chat' element={<Chatpage />} /> */}
        {/* <Route path='/signuppage' element={<Signuppage />} /> */}
        <Route path='/patientpage' element={<Patientpage />} />
        <Route path='/patientpage/Pharmacypage' element={<Pharmacypage />} />
        <Route path='/aihelper' element={<Aihelperpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
