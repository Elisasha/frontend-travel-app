import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import MainPage from "./MainPage";
import PlaceName from "./PlaceName";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/place" component={PlaceName} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
