import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import app from "./base.js";
import SignUp from "./components/SignUp";
import { AddTrip } from "./Pages/AddTrip";
import { FriendsList } from "./Pages/FriendsList";
import Login from "./Pages/LoginPage";
import PrivateRoute from "./Pages/PrivateRoute";
import { Triplist } from "./Pages/TripList";
import { TripPage } from "./Pages/TripPage";
import { extendCurrentUser, setCurrentUser } from "./store/curUser/actions";
import { database } from "./base";

function App() {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    app.auth().onAuthStateChanged(async (user) => {
      setPending(true);
      dispatch(setCurrentUser(user));
      if (user) {
        const snap = await database.ref("users/" + user.uid).get();
        const extUser = snap.val();
        dispatch(extendCurrentUser(extUser));
      }
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path="/login"
            exact
            render={() =>
              app.auth().currentUser ? (
                <Redirect to={"/trips"}></Redirect>
              ) : (
                <Login></Login>
              )
            }
          />
          <PrivateRoute path="/addtrip" component={AddTrip} />
          <Route path="/signup" exact component={SignUp} />
          <PrivateRoute exact path="/trips" component={Triplist} />
          <Route
            path="/logout"
            exact
            render={() => <Redirect to="/login"></Redirect>}
          />
          <Route path="/friends" component={FriendsList} />
          <Route path="/trips/:tripID" component={TripPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
