import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './App.css';
import Header from './components/Header/Header'
import LoginScreen from './screens/Login/LoginScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SignupScreen from './screens/SignupScreen/SignupScreen';
import UserProfile from './screens/UserProfile/UserProfile';
import RechargeScreen from './screens/RechargeScreen/rechargeScreen';
import RechargeFormScreen from './screens/RechargeFormScreen/rechargeFormScreen';
import BusScreen from './screens/BusScreen/BusScreen'
import RecharbalanceScreen from './screens/RechargeBalance/recharbalanceScreen';
import RechargehistoryScreen from './screens/RechargehistoryScreen/rechargehistoryScreen';
import TripAmount from './screens/TripAmount/TripAmount';

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomeScreen} exact />
      <Route path='/login' component={LoginScreen} />
      <Route path='/signup' component={SignupScreen} />
      <Route path='/profile' component={UserProfile} />
      <Route path='/recharge/:rechargeAmount/:paymentMethod' component={RechargeScreen} />
      <Route path='/rechargeacc' component={RechargeFormScreen} />
      <Route path='/busIns' component={BusScreen} />
      <Route path='/balance' component={RecharbalanceScreen} />
      <Route path='/rechargehistory' component={RechargehistoryScreen} />
      <Route path='/tripAmount/:busId/:busStation' component={TripAmount} />
    </Router>
  )
}

export default App;
