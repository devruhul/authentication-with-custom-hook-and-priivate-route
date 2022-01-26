import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn.js';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';



function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="shipping" element={<Shipping />} />
          </Route>
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
