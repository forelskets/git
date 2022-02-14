
import { Switch, Route, Redirect } from "react-router-dom";


import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import FrontMain from "./frontPage/frontMain";




import ApplyLoan from './user/ApplyLoan'
import AdminMain from './admin/AdminMain'
import AdminLogin from './admin/AdminLogin'




import UserMain from './user/UserMain'
import AdminServices from "./admin/AdminServices";






















function App() {
  
  return (
    <div className="App">
      
      <Switch>
      <Route exact path="/sign-up" exact component={SignUp} />
        <Route exact path="/sign-in" exact component={SignIn} />
        <Route path="/" exact component={FrontMain} />
        <Route path="/applyloan" component={ApplyLoan} />
        <Route  path="/nav" component={UserMain} />
        <Route path="/admin" component={AdminMain} />
        <Route path="/adminServices" component={AdminServices} />
        <Route path="/adminLogin" component={AdminLogin} />
        
      
        
        
      
         
      </Switch>
      
    </div>
  );
}

export default App;
