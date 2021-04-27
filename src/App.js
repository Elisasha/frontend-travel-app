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
import { useRouteMatch } from "react-router-dom";
import { setPending } from "./store/pending/actions";
import { setUser } from "./store/users/actions";

function App() {
  const pending = useSelector((state) => state.pending);
  const curUser = useSelector((state) => state.curUser);
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    app.auth().onAuthStateChanged(async (user) => {
      dispatch(setPending(true));
      dispatch(setCurrentUser(user));
      if (user) {
        const snap = await database.ref("users/" + user.uid).get();
        const extUser = snap.val();
        dispatch(setUser({ [user.uid]: extUser }));
        dispatch(setPending(false));
      }
    });
  }, []);
  let match = useRouteMatch("/addtrip");

  if (pending) {
    return <>Loading...</>;
  }

  console.log(pending, curUser, users);

  return (
    <section className="section">
      <div className="md:container md:mx-auto">
        <main className="main">
          <UserCard />
          <div className="bg-white rounded flex-grow">
            {!match && <SearchPanel></SearchPanel>}
            <div className="content-area bg-white rounded overflow-hidden shadow-lg">
              <div className="App">
                <Switch>
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
                  <PrivateRoute path="/:uid/addtrip" component={AddTrip} />
                  <Route path="/signup" exact component={SignUp} />
                  <PrivateRoute exact path="/:uid/trips" component={Triplist} />
                  <Route
                    path="/logout"
                    exact
                    render={() => <Redirect to="/login"></Redirect>}
                  />
                  <Route path="/:uid/friends" component={FriendsList} />
                  <Route path="/:uid/trips/:tripID" component={TripPage} />
                </Switch>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default App;
