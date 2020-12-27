import { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css';

import Navbar from './components/Navbar/Navbar';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { auth } from './actions/users';

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

console.log(isAuth);
  return (
    <Router>
      <div className="app">
  
        <Navbar />
        <div className="container">
          { !isAuth ? (
            <Switch>
              <Route path={'/registration'} component={Registration} />
              <Route path={'/login'} component={Login} />
          </Switch>
          ) : (
            <h1>HELLO</h1>
          ) }
            
        </div>
      </div>
    </Router>
  );
}

export default App;
