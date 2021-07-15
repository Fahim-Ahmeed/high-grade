import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import Home from './components/Home/Home/Home';
import Service from './components/Service/Service';

function App() {
  return (
     
       <Router>
          <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/service">
                  <Service></Service>
              </Route>
          </Switch>
       </Router>
     
  );
}

export default App;
