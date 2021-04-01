import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import './App.css';
import Login from "./Pages/LoginPage";
import { PlaceName } from "./Pages/PlaceName";
import { FriendPage } from "./Pages/FriendPage";
import { withNavBar } from "./components/NavBar";
import { MainPage } from "./Pages/MainPage";
import { Triplist } from "./Pages/TripList";
import { FriendsList } from "./Pages/FriendsList"
import { AddTrip } from "./Pages/AddTrip";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from './Pages/PrivateRoute'


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" exact component={Login} />
            {/* <Route path="/places" component={withNavBar(PlaceName)} /> */}
            {/* <Route path="/friend/:friendID" component={withNavBar(FriendPage)} /> */}
            {/* <Route path="/:user/friends" component={withNavBar(FriendsList)} /> */}
            {/* <Route path="/:user" exact component={MainPage} /> */}
            {/* <Route path="/trips" component={Triplist} /> */}
            <PrivateRoute path="/addtrip" component={AddTrip} />
            <Route path="/signup" exact component={SignUp} />
            <PrivateRoute exact path="/" component={Triplist} />
            <Route path="/logout" exact render = {() => <Redirect to="/login"></Redirect>} />
            {/* add friendslist */}
            <Route path="/friends" component={FriendsList} />
            {/* <Route path="/login" component={LoginPage} /> */}
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
