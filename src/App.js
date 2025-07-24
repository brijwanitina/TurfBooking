import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Admin from './pages/Admin';
import SignIn from './pages/SignIn';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<AboutUs />} />
          <Route path = "/contact" element = {<Contact/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/admin" element = {<Admin/>}/>
          <Route path = "/userdetails" element = {<UserDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
