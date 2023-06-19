import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRouter/PrivateRuter';
import Rooms from './components/Rooms/Rooms';
// import Payment from './components/PaymentGateway/Payment';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='rooms' element={<Rooms />} />
        <Route path="/*" element={<PrivateRoute />}>
          <Route path='booking' element={<Book />} />
          {/* <Route path='payment' element={<Payment />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
