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
import AuthProvider from './components/Context/AuthProvider';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      {/* context with router */}
      <AuthProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <PrivateRoute exact path="/explore">
              <Explore />
            </PrivateRoute>
            <Route exact path="/dashBoard">
              <DashBoard />
            </Route>
            {/* <PrivateRoute exact path="/placeOrder/:id">
            <PlaceOrder />
          </PrivateRoute> */}
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            {/* <Route path="*">
           <NotFound />
         </Route> */}
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;