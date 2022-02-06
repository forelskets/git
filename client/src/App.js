
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";

import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import UProfile from './userDashboard/pages/UProfile';
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import FrontMain from "./frontPage/frontMain";
import './frontPage/css/frontPage.css';

import BankOffers from "./pages/BankOffers";
import Banks from "./pages/Banks";
import UHome from './userDashboard/pages/UHome';
import ULoan from './userDashboard/pages/ULoan';
import ApplyLoan from './userDashboard/pages/ApplyLoan';
import UMain from './userDashboard/components/layout/UMain';
import { createContext , useReducer , useContext} from 'react';
import { reducer} from './reducer/UseReducer';
import { initialState } from './reducer/UseReducer';

export const userContext = createContext();


// export const Routing =()=>{
//   const {state , dispatch} =useContext(userContext);
//   if(state == true){
//     return(
//     <UMain>
//     <Route exact path="/udashboard" component={UHome} />
//      </UMain>
//     )
//   }else if(state == false){
//     return(
//       <Main>
//       <Route exact path="/dashboard" component={Home} />
//       <Route exact path="/tables" component={Tables} />
//       <Route exact path="/billing" component={Billing} />
//       <Route exact path="/bankOffers" component={BankOffers} />
//       <Route exact path="/rtl" component={Rtl} />
//       <Route exact path="/profile" component={Profile} />
      
//     </Main>
//     )

//   }
// }

















function App() {
  const [state , dispatch] = useReducer(reducer , initialState);
  return (
    <div className="App">
      <userContext.Provider value={{state, dispatch}}>
      <Switch>
      <Route exact path="/sign-up" exact component={SignUp} />
        <Route exact path="/sign-in" exact component={SignIn} />
        <Route path="/" exact component={FrontMain} />
        <Route exact path="/applyloan" component={ApplyLoan} />
        
        {/* <Routing /> */}
        
        
      
       <Main>
       <Route exact path="/udashboard" component={UHome} />
       <Route exact path="/uloan" component={ULoan} />
       
       
      <Route exact path="/dashboard" component={Home} />
      <Route exact path="/banks" component={Banks} />
      <Route exact path="/billing" component={Billing} />
      <Route exact path="/bankOffers" component={BankOffers} />
      <Route exact path="/rtl" component={Rtl} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/uprofile" component={UProfile} />
      
    </Main>      
      </Switch>
      </userContext.Provider>
    </div>
  );
}

export default App;
