import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css';

import Navbar from './components/Navbar/Navbar';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
            <Switch>
              <Route path={'/registration'} component={Registration} />
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
