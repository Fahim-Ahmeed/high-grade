import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import Home from './components/Home/Home/Home';
import Service from './components/Service/Service';
import PromiseDetail from './components/PromiseDetail/PromiseDetail';
import Supply from './components/Supply/Supply';
import Tools from './components/Tools/Tools';
import Login from './components/Login/Login';

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
              <Route path="/detail">
                  <PromiseDetail></PromiseDetail>
              </Route>
              <Route path="/supply">
                  <Supply></Supply>
              </Route>
              <Route path="/tools">
                  <Tools></Tools>
              </Route>
              <Route path="/login">
                  <Login></Login>
              </Route>
          </Switch>
       </Router>
     
  );
}

export default App;
