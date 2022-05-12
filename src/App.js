import { Routes, Route} from "react-router-dom";
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Registation from "./Pages/Access/Registation";
import Login from "./Pages/Access/Login";
import About from "./Pages/About/About";
import Reviews from "./Pages/Reviews/Reviews";
import Appointment from './Pages/Appointment/Appointment';
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import { ToastContainer} from 'react-toastify';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
