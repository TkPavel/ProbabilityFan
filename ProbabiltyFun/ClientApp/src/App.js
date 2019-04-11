import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import MontyHall from './components/MontyHall';

export default () => (
  <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/montyhall' component={MontyHall} />
  </Layout>
);
