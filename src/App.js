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
import PrivateRoute from './components/Login/PrivateRoute';
import Contact from './components/Home/Contact/Contact';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import React ,{createContext,useState}from'react';
import AddPhotos from './components/AdminDashboard/AddPhotos/AddPhotos';
import Photos from './components/AdminDashboard/Photos/Photos';
import WorkPhotos from './components/AdminDashboard/AddPhotos/WorkPhotos/WorkPhotos';
import GoverningMembers from './components/AdminDashboard/AddPhotos/GoverningMembers/GoverningMembers';
import AllGoverningMembers from './components/AdminDashboard/Photos/AllGoverningMembers/AllGoverningMembers';
import AllWorkPhotos from './components/AdminDashboard/Photos/AllWorkPhotos/AllWorkPhotos';
export const adminContext=createContext();
function App() {

const [admin,setAdmin]=useState({
    email:'',
    password:''
});
  return (
     <adminContext.Provider value={[admin,setAdmin]}>
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
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <PrivateRoute path="/dashboard">
                  <AdminDashboard></AdminDashboard>
              </PrivateRoute>
              <PrivateRoute path="/addphotos">
                 <AddPhotos></AddPhotos>
              </PrivateRoute>
              <PrivateRoute path="/addworkPhotos">
              <WorkPhotos></WorkPhotos>
              </PrivateRoute>
              <PrivateRoute path="/addGoverningMembers">
                <GoverningMembers></GoverningMembers>
              </PrivateRoute>
              <PrivateRoute path="/photos">
                  <Photos></Photos>
              </PrivateRoute>
              <PrivateRoute path="/workPhotos">
                <AllWorkPhotos></AllWorkPhotos>
              </PrivateRoute>
              <PrivateRoute path="/GoverningMembers">
              <AllGoverningMembers></AllGoverningMembers> 
              </PrivateRoute>
          </Switch>
       </Router>
       </adminContext.Provider>
     
  );
}

export default App;
