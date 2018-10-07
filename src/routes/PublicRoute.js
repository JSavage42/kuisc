import React from 'react';
import { Route} from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export const PublicRoute = ({ 
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
        <div className='container'>
            <Header />
            <Component {...props} />
            <Footer />
        </div> 
)} />
);


export default PublicRoute;