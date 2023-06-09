import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import EditProfile from "./pages/editProfile/EditProfile";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">{!user ? <Login /> : <Messenger />}</Route>
        <Route path="/profile/:username">
          {!user ? <Login /> : <Profile />}
        </Route>
        <Route path="/edit-profile">
          {!user ? <Login /> : <EditProfile />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
