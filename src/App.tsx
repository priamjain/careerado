
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/general.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Roadmap } from './pages/ExploreRoadmaps/Roadmap/Roadmap';
import {RoadmapData}  from './utils/RoadmapData.service'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import Login from './pages/Login/Login';
import { AuthProvider } from './context/AuthContext';
import { SignOut } from './pages/SignOut/SignOut';
import { ExploreRoadmaps } from './pages/ExploreRoadmaps/ExploreRoadmaps';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

interface RoadmapInterface {
  id: string,
  title: string,
  descriptionSmall: string,
  descriptionLarge: string,
  comingsoon: boolean,
  image: string | null,
}

function App() {


  return (
    <AuthProvider>
      <Router>
      <ScrollToTop/>
        <Switch>
          <Route exact path="/">
          
            <Home/>
          </Route>

          <Route exact path="/aboutus">
            <AboutUs/>
          </Route>

          <Route exact path="/roadmap">
            <ExploreRoadmaps/>
          </Route>

          {
            RoadmapData.map((category)=>{
              return(
                category.roadmaps.map((roadmap:RoadmapInterface)=>{
                  return(
                    <Route path={"/roadmap/"+roadmap.id}>
                      <Roadmap
                          id={roadmap.id}
                          title={roadmap.title}
                          descriptionSmall={roadmap.descriptionSmall}
                          descriptionLarge={roadmap.descriptionLarge}
                          roadmap={roadmap.image}
                      />
                    </Route>
                    )
                  })
              )
             })
            }
          <Route exact path="/login">
            <Login/>
          </Route>

          <Route exact path="/signout">
              <SignOut/>
          </Route>          
          <Route>
               <NotFoundPage/>        
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
