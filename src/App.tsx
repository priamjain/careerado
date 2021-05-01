import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/general.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Roadmap } from './pages/Roadmap/Roadmap';
import roadmapsData  from './actions/RoadmapData.service'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import Login from './pages/Login/Login';
import { AuthProvider } from './context/AuthContext';
import { SignOut } from './pages/SignOut/SignOut';

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
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          {
            roadmapsData.map((category)=>{
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
