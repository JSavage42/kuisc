import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as routes from "../config/routes";
import PublicRoute from "./PublicRoute";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Calendar from "../components/Calendar/Calendar";
import COC from "../components/COC/coc";
import News from "../components/News/News";
import Sponsors from "../components/Sponsors/Sponsors";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

const AppRouter = () => (
  <Router>
    <Switch>
      <PublicRoute path={routes.HOME} component={Home} exact />
      <PublicRoute path={routes.ABOUT} component={About} exact />
      <PublicRoute path={routes.CALENDAR} component={Calendar} exact />
      <PublicRoute path={routes.CODE_OF_CONDUCT} component={COC} exact />
      <PublicRoute path={routes.NEWS} component={News} exact />
      <PublicRoute path={routes.SPONSORS} component={Sponsors} />
      <PublicRoute component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
