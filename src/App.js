import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { UserCard } from "./components/UserCard";
import { SearchPanel } from "./components/SearchPanel";
import { useRouteMatch, useParams } from "react-router-dom";
import { setPending } from "./store/pending/actions";
import { setUser } from "./store/users/actions";
import { Container } from "./components/Container";

function App() {
  const pending = useSelector((state) => state.pending);
  const curUser = useSelector((state) => state.curUser);
  const users = useSelector((state) => state.users);
  const { uid } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    app.auth().onAuthStateChanged(async (user) => {
      dispatch(setPending(true));
      dispatch(setCurrentUser(user));
      if (user) {
        const snap = await database.ref("users/" + user.uid).get();
        const extUser = snap.val();
        dispatch(setUser({ [user.uid]: extUser }));
        if (user.uid !== uid) {
          const snap = await database.ref("users/" + uid).get();
          const extUser = snap.val();
          dispatch(setUser({ [uid]: extUser }));
        }
        dispatch(setPending(false));
      }
      dispatch(setPending(false));
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <Switch>
      <div className="App">
        <Route
          path="/login"
          exact
          render={() =>
            app.auth().currentUser ? (
              <Redirect
                to={"/" + app.auth().currentUser.uid + "/trips"}
              ></Redirect>
            ) : (
              <Login></Login>
            )
          }
        />
        <PrivateRoute
          path="/:uid/addtrip"
          render={() => (
            <Container>
              <AddTrip />
            </Container>
          )}
        />
        <Route path="/signup" exact component={SignUp} />
        <PrivateRoute
          exact
          path="/:uid/trips"
          render={() => (
            <Container>
              <Triplist />
            </Container>
          )}
        />
        <Route
          path="/logout"
          exact
          render={() => <Redirect to="/login"></Redirect>}
        />
        <Route
          path="/:uid/friends"
          render={() => (
            <Container>
              <FriendsList />
            </Container>
          )}
        />
        <Route
          exact
          path="/"
          render={() => <Redirect to={"/" + curUser.uid + "/trips"}></Redirect>}
        />
        <Route
          path="/:uid/trips/:tripID"
          render={() => (
            <Container>
              <TripPage />
            </Container>
          )}
        />
      </div>
    </Switch>
  );
}

export default App;
