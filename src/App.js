import { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import app from "./base.js";
import SignUp from "./components/SignUp";
import { AddTrip } from "./Pages/AddTrip";
import { FriendsList } from "./Pages/FriendsList";
import Login from "./Pages/LoginPage";
import PrivateRoute from './Pages/PrivateRoute';
import { Triplist } from "./Pages/TripList";
import { TripPage } from './Pages/TripPage';
import { extendCurrentUser, logoutUser, setCurrentUser } from './store/curUser/actions';
import { store } from './store/index';
import { database } from "./base";
import { useHistory } from 'react-router-dom'


function App() {
  // const history = useHistory();
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    app.auth().onAuthStateChanged(async (user) => {
      console.log("app component", user)
      setPending(true)
      dispatch(setCurrentUser(user));
      if (user) {
        const snap = await database.ref('users/' + user.uid).get()
        const extUser = snap.val();
        dispatch(extendCurrentUser(extUser));
        console.log("something")
      }
      setPending(false)
    });
  }, []);

  if (pending) {
    return <>Loading...</>
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" exact render={() => app.auth().currentUser ? <Redirect to="/"></Redirect> : <Login></Login>} />
          {/* <Route path="/places" component={withNavBar(PlaceName)} /> */}
          {/* <Route path="/friend/:friendID" component={withNavBar(FriendPage)} /> */}
          {/* <Route path="/:user/friends" component={withNavBar(FriendsList)} /> */}
          {/* <Route path="/:user" exact component={MainPage} /> */}
          {/* <Route path="/trips" component={Triplist} /> */}
          <PrivateRoute path="/addtrip" component={AddTrip} />
          <Route path="/signup" exact component={SignUp} />
          <PrivateRoute exact path="/" component={Triplist} />
          <Route path="/logout" exact render={() => <Redirect to="/login"></Redirect>} />
          {/* add friendslist */}
          <Route path="/friends" component={FriendsList} />
          <Route path="/trips/:tripID" component={TripPage} />
          {/* <Route path="/login" component={LoginPage} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
