import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
// import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Explore from './components/Explore/Explore';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      {/* context with router */}
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/dashBoard">
            <DashBoard />
          </Route>
          {/* <PrivateRoute exact path="/placeOrder/:id">
            <PlaceOrder />
          </PrivateRoute> */}
          <Route exact path="/login">
            <Login />
          </Route>
          {/* <Route path="*">
           <NotFound />
         </Route> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;