import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom'
import HomePage from './pages/Start';
import AdminLogin from './pages/Adminlogin';
import AdminRegistrationPage from './pages/AdminRegistraion';
import AdminRegistrationSucess from './pages/AdminRegistrationSucess';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/adminlogin' element={<AdminLogin/>}></Route>
        <Route path='/adminregis' element={<AdminRegistrationPage/>}></Route>
        <Route path='/adminregissuccess' element={<AdminRegistrationSucess/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
