import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import { MainPage } from "./Pages/MainPage";
import { PlaceName } from "./Pages/PlaceName";
import { FriendPage } from "./Pages/FriendPage";
import { withNavBar } from "./components/NavBar";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/places" component={withNavBar(PlaceName)} />
          <Route path="/friend/:friendID" component={withNavBar(FriendPage)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
