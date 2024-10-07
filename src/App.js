import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Screens/Home';
import About from './Screens/About';
import How from './Screens/How';
import Pricing from './Screens/Pricing';
import Resources from './Screens/Resources';
import Contact from './Screens/Contact';
import Investment from './Screens/Investment';
import Join from './Screens/Join';
import Signup from './Screens/Signup';
import Verify from './Screens/Verify';
import Login from './Screens/Login';
import Reset from './Screens/Reset';
import Check from './Screens/Check';
import NewPassword from './Screens/NewPassword';
import PasswordResetSuccess from './Screens/PasswordResetSuccess';
import UserDashboard from './UserDashboard/Screens/UserDashboard';
import Personal from './UserDashboard/Screens/Personal';
import KycReg from './UserDashboard/Screens/KycReg';
import KycSuccess from './UserDashboard/Screens/KycSuccess';
import Deposit from './UserDashboard/Screens/Deposit';
import DepositSuccess from './UserDashboard/Screens/DepositSuccess';
import Withdraw from './UserDashboard/Screens/Withdraw';
import WithdrawSuccess from './UserDashboard/Screens/WithdrawSuccess';
import Notification from './UserDashboard/Screens/Notification';
import Setting from './UserDashboard/Screens/Setting';
import NewPaymentMethod from './UserDashboard/Screens/NewPaymentMethod';
import NewPaymethodMethodSuccess from './UserDashboard/Screens/NewPaymethodMethodSuccess';

const App = () => {
  return (
    
    <div>
      
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/how' element={<How/>}/>
        <Route path='/invest' element={<Investment/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/contact' element={<Contact/>}/>


        {/* Registration/Login */}
        <Route path='/join' element={<Join/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reset' element={<Reset/>}/>
        <Route path='/check' element={<Check/>}/>
        <Route path='/create-password' element={<NewPassword/>}/>
        <Route path='/password-reset-success' element={<PasswordResetSuccess/>}/>


        {/* Dashboard */}
        <Route path='/user-dashboard' element={<UserDashboard/>}/>
        <Route path='/personal' element={<Personal/>}/>
        <Route path='/kyc' element={<KycReg/>}/>
        <Route path='/kyc-successful' element={<KycSuccess/>}/>
        <Route path='/deposit' element={<Deposit/>}/>
        <Route path='/deposit-successful' element={<DepositSuccess/>}/>
        <Route path='/withdraw' element={<Withdraw/>}/>
        <Route path='/withdraw-successful' element={<WithdrawSuccess/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/setting' element={<Setting/>}/>
        <Route path='/new-payment-method' element={<NewPaymentMethod/>}/>
        <Route path='/update-successful' element={<NewPaymethodMethodSuccess/>}/>
      </Routes>

    </div>

    
  );
}

export default App;
