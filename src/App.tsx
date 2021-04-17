import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/general.css'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Roadmap } from './pages/Roadmap/Roadmap';
import ReactjsRoadmap from './assets/roadmaps/reactjs.png'
import roadmapsData  from './data/roadmaps.json'
import { Layout } from './utils/Layout/Layout';
import { Helmet } from 'react-helmet';
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
                <Helmet>
                  <title>404</title>
                  <meta
                    name="description"
                    content="Page not found on Careerado.com"
                  />
                </Helmet>
                <h2 className="text-center display-4 mt-5">
                  404 Not Found
                </h2>
                <p className="text-center text-muted">Page you are looking for is not there</p>
                <div className="d-flex justify-content-center">
                  <Link to="/" className="btn btn-secondary">Home</Link>
                </div>
              </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
