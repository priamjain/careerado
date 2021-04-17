import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/general.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Roadmap } from './pages/Roadmap/Roadmap';
import ReactjsRoadmap from './assets/roadmaps/reactjs.png'
import roadmapsData  from './data/roadmaps.json'
import { Layout } from './utils/Layout/Layout';
function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/roadmap/React">
            <Roadmap
                title={roadmapsData.react.title}
                description={roadmapsData.react.description}
                roadmap={ReactjsRoadmap}
            />
          </Route>
          <Route>
            <Layout>
              <div className="text-center display-4 mt-5">
                404 Not Found
              </div>
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
