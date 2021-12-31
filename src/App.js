import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
