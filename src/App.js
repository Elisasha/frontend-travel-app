import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import MainPage from "./MainPage";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
