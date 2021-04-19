import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/general.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Roadmap } from './pages/Roadmap/Roadmap';
import ReactRoadmap from './assets/roadmaps/reactjs.png'
import BackendRoadmap from './assets/roadmaps/backend.png'
import DataScienceRoadmap from './assets/roadmaps/datascience.png'
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

          <Route path="/roadmap/react">
            <Roadmap
                id={roadmapsData.roadmaps.react.id}
                title={roadmapsData.roadmaps.react.title}
                descriptionSmall={roadmapsData.roadmaps.react.descriptionSmall}
                descriptionLarge={roadmapsData.roadmaps.react.descriptionLarge}
                roadmap={ReactRoadmap}
            />
          </Route>

          <Route path="/roadmap/backend">
            <Roadmap
                id={roadmapsData.roadmaps.backend.id}
                title={roadmapsData.roadmaps.backend.title}
                descriptionSmall={roadmapsData.roadmaps.backend.descriptionSmall}
                descriptionLarge={roadmapsData.roadmaps.backend.descriptionLarge}
                roadmap={BackendRoadmap}
            />
          </Route>

          <Route path="/roadmap/datascience">
            <Roadmap
                id={roadmapsData.roadmaps.datascience.id}
                title={roadmapsData.roadmaps.datascience.title}
                descriptionSmall={roadmapsData.roadmaps.datascience.descriptionSmall}
                descriptionLarge={roadmapsData.roadmaps.datascience.descriptionLarge}
                roadmap={DataScienceRoadmap}
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
