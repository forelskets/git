import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Dashboard from './user/Dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
   <BrowserRouter>
     <Switch>
       <Route path='/cdashboard' component={Dashboard}></Route>
     </Switch>
   </BrowserRouter>
  );
}

export default App;
