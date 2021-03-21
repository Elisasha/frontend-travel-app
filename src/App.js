import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import { LoginPage } from "./Pages/LoginPage";
import { PlaceName } from "./Pages/PlaceName";
import { FriendPage } from "./Pages/FriendPage";
import { withNavBar } from "./components/NavBar";
import { MainPage } from "./Pages/MainPage";
import { Triplist } from "./Pages/TripList";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          {/* <Route path="/places" component={withNavBar(PlaceName)} /> */}
          {/* <Route path="/friend/:friendID" component={withNavBar(FriendPage)} /> */}
          {/* <Route path="/:user/friends" component={withNavBar(FriendsList)} /> */}
          {/* <Route path="/:user" exact component={MainPage} /> */}
          <Route path="/trips" component={Triplist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
