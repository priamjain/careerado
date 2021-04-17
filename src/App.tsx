import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/general.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Roadmap } from './pages/Roadmap/Roadmap';
import ReactjsRoadmap from './assets/roadmaps/reactjs.png'
import BackendRoadmap from './assets/roadmaps/backend.png'
import roadmapsData  from './data/roadmaps.json'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

function App() {

  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/roadmap/react">
            <Roadmap
                id={roadmapsData.react.id}
                title={roadmapsData.react.title}
                description={roadmapsData.react.description}
                roadmap={ReactjsRoadmap}
            />
          </Route>

          <Route exact path="/roadmap/backend">
            <Roadmap
                id={roadmapsData.backend.id}
                title={roadmapsData.backend.title}
                description={roadmapsData.backend.description}
                roadmap={BackendRoadmap}
            />
          </Route>

          <Route>
               <NotFoundPage/>        
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
