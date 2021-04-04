
// import './App.css';
import {Route,Switch} from 'react-router-dom'
import Home from './Home'
import NavBar from './../Components/NavBar'
import ShowCart from './ShowCart';
export function Routes() {
  return (
    <div>
        <NavBar/>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/showCart' exact>
            <ShowCart />
          </Route>
        </Switch>
    </div>
  );
}

