import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as routes from '../config/routes';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Calendar from '../components/Calendar/Calendar';
import COC from '../components/COC/coc';
import News from '../components/News/News';
import Sponsors from '../components/Sponsors/Sponsors';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Media from '../components/Media/Media';

const AppRouter = () => (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route path={routes.HOME} component={Home} exact />
        <Route path={routes.ABOUT} component={About} exact />
        <Route path={routes.MEDIA} component={Media} exact />
        <Route path={routes.CALENDAR} component={Calendar} exact />
        <Route path={routes.CODE_OF_CONDUCT} component={COC} exact />
        <Route path={routes.NEWS} component={News} exact />
        <Route path={routes.SPONSORS} component={Sponsors} exact />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
