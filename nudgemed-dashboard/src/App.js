import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProvider from './Contexts/UserContext';
import Home from './Pages/Home';
import Login from './Pages/Login';
import CreateAccount from './Pages/CreateAccount';
import Patients from './Pages/Patients';
import Account from './Pages/Account';
import Navigation from './Components/Navigation';
import PatientDetails from './Components/Patients/PatientDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/createaccount' element={<CreateAccount />} />
            <Route path='/patients' element={<Patients />} />
            <Route path='/patients/:id' element={<PatientDetails />} />
            <Route path='/account' element={<Account />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </UserProvider>        
      </BrowserRouter>
    </div>
  );
}

export default App;
