import './App.css';
import SharedLayout from './Screens/SharedLayout';
import Home from './Components/Home';
import About from './Components/About'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Login from './Components/Login';
import Booking from './Components/Booking';
import BookingScreen from './Screens/BookingScreen';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import ProfileScreen from './Screens/ProfileScreen';
import AdminScreen from './Screens/AdminScreen';


function App() {
  return (
    <>
      <BrowserRouter basename='/Restaurant-Reservation-System'>
        <Routes>
          <Route exact path='/' element={<SharedLayout />} />
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='book' element={<Booking />} />
          <Route path="/book/:id/:date/:members" element={<BookingScreen />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='profile' element={<ProfileScreen />} />
          <Route path='admin' element={<AdminScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;