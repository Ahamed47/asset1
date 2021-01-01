import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import First from "./components/first/First";
import Login from "./components/login/Login";
import Login2 from "./components/login/Login2";
import Logout from "./components/logout/Logout";
import Register2 from "./components/register/Register2";
import Home from "./components/home/Home";
import Asset from "./components/asset/Asset";
import ManagerAsset from "./components/asset/ManagerAsset";
import Profile from "./components/profile/Profile";
import AdminProfile from "./components/profile/AdminProfile";
//import Request from "./components/request/Request";
import InputRequest from "./components/request/InputRequest";
import ListRequest from "./components/request/ListRequest";
import ManagerRequests from "./components/request/ManagerRequests";
import AcceptedRequest from "./components/request/AcceptedRequest";
import AdminHome from "./components/home/AdminHome";
import AdminReport from "./components/asset/AdminReport";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={First} />
          <Route path="/login" component={Login} />;
          <Route path="/admin_login" component={Login2} />
          <Route path="/logout" component={Logout} />
          <Route path="/register2" component={Register2} />
          <Route path="/home" component={Home} />
          <Route path="/admin_home" component={AdminHome} />
          <Route path="/asset" component={Asset} />
          <Route path="/manager_asset" component={ManagerAsset} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin_profile" component={AdminProfile} />
          <Route path="/admin_report" component={AdminReport} />
          <Route path="/request" component={InputRequest} />
          <Route path="/admin_request" component={ListRequest} />
          <Route path="/status" component={AcceptedRequest} />
          <Route path="/requests" component={ManagerRequests} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//<Route path="/request" component={Request} />;
