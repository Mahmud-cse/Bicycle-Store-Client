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
import Purchase from './components/Purchase/Purchase';
import Pay from './components/Pay/Pay';
import MyOrder from './components/MyOrder/MyOrder';
import Review from './components/Review/Review';
import AddProduct from './components/AddProduct/AddProduct';

function App() {
  return (
    <div>
      {/* context with router */}
      <AuthProvider>
        <Router>
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
            <Route exact path="/pay">
              <Pay />
            </Route>
            <Route path="/myOrder">
              <MyOrder />
            </Route>
            <Route exact path="/review">
              <Review />
            </Route>
            {/* <PrivateRoute exact path="/makeAdmin">
              <MakeAdmin />
            </PrivateRoute> */}
            <Route exact path="/addProduct">
              <AddProduct />
            </Route>
            <PrivateRoute exact path="/purchase/:id">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/dashBoard">
              <DashBoard />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;