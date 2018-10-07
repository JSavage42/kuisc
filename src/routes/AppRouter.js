import React from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import PublicRoute from './PublicRoute';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Calendar from '../components/Calendar/Calendar';
import COC from '../components/COC/coc';
import News from '../components/News/News';
import Sponsors from '../components/Sponsors/Sponsors';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

const AppRouter = () => (
    <Router>
        <Switch>
            <PublicRoute path="/" component={Home} exact />
            <PublicRoute path="/about" component={About} exact />
            <PublicRoute path="/calendar" component={Calendar} exact />
            <PublicRoute path="/coc" component={COC} exact />
            <PublicRoute path="/news" component={News} exact />
            <PublicRoute path="/sponsors" component={Sponsors} />
            <PublicRoute component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;