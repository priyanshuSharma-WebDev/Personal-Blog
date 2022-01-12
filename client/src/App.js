import './App.css';
import Home from './Pages/Home/Home';
import Topbar from './components/Topbar/Topbar';
import Single from "./Pages/Single/Single"
import Write from "./Pages/Write/Write"
import Settings from "./Pages/Home/Settings/Settings"
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;

  return (
    <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            {
              user ? <Home /> : <Register />
            }
          </Route>
          <Route path="/login">
            {
              user ? <Home /> : <Login />
            }
          </Route>
          <Route path="/write">
            {
              user ? <Write /> : <Login />
            }
          </Route>
          <Route path="/settings">
            {
              user ? <Settings /> : <Login />
            }
          </Route>
          <Route path="/post/:post_id">
            <Single/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
