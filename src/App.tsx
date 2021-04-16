import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/general.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Roadmap } from './pages/Roadmap/Roadmap';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/roadmap">
            <Roadmap/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
