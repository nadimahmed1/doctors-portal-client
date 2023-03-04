import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import About from './Pages/Home/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyDashboard from './Pages/Dashboard/MyDashboard';
import MyReview from './Pages/Dashboard/MyReview';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='Login' element={<Login></Login>}></Route>
        <Route path='SignUp' element={<SignUp></SignUp>}></Route>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyDashboard></MyDashboard>}></Route>
          <Route path='MyReview' element={<MyReview></MyReview>}></Route>

        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
