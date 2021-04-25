import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/general.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Roadmap } from './pages/Roadmap/Roadmap';
import roadmapsData  from './data/RoadmapData'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

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
    <div>
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
          <Route>
               <NotFoundPage/>        
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
