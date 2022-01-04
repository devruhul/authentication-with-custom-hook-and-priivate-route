import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn.js';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<LogIn />} />
          <Route
            path="shipping"
            element=
            {<PrivateRoute>
              <Shipping />
            </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
