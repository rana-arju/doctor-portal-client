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
import RequiredAuth from "./Pages/Shared/RequiredAuth/RequiredAuth";
import 'react-toastify/dist/ReactToastify.css';
import Deshboard from "./Pages/Deshboard/Deshboard";
import MyAppointment from "./Pages/Deshboard/MyAppointment";
import MyReview from "./Pages/Deshboard/MyReview";
import AllUsers from "./Pages/Deshboard/AllUsers";
import MyHistory from "./Pages/Deshboard/MyHistory";
import RequireAdmin from "./Pages/Shared/RequireAdmin/RequireAdmin";
import AddDoctor from "./Pages/Deshboard/AddDoctor";
import ManageDoctor from "./Pages/Deshboard/ManageDoctor";
import Payment from "./Pages/Deshboard/Payment";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={
        <RequiredAuth>
            <Appointment />
        </RequiredAuth>
        } />
        <Route path="/deshboard" element={
        <RequiredAuth>
            <Deshboard />
        </RequiredAuth>
        } >
            <Route index element={<MyAppointment />} />
            <Route path="review" element={<MyReview />} />
            <Route path="history" element={<MyHistory />} />
            <Route path="payment/:id" element={<Payment />} />
            <Route path="users" element={<AllUsers /> } />
            <Route path="adddoctor" element={<AddDoctor />} />
            <Route path="manage" element={<ManageDoctor />} />
        </Route>
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
