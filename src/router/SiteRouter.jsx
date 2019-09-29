import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../components/pages/home/Home.jsx';
import UsePogr from '../components/pages/usePogr/UsePogr.jsx';
import ClearSnow from '../components/pages/clearSnow/ClearSnow.jsx';
import FrontPogr18 from '../components/pages/fronPogr18/FrontPogr18.jsx';
import TelescopPogr from '../components/pages/telescopPogr/TelescopPogr.jsx';
import ForkPogr from '../components/pages/forkPogr/ForkPogr.jsx';
import MiniPogr from '../components/pages/miniPogr/MiniPogr.jsx';
import FrontPogr from '../components/pages/fronPogr/FrontPogr.jsx';
import UniversalPogr from '../components/pages/universalPogr/UniversalPogr.jsx';
import PogrBuilding from '../components/pages/pogrBuilding/PogrBuilding.jsx';
import VolvoConcept from '../components/news/units/volvoConcept/VolvoConcept.jsx';
import CaseConcept from '../components/news/units/caseConcept/CaseConcept.jsx';
import Doosan from '../components/news/units/doosan/Doosan.jsx';
import CatElectroPogr from '../components/news/units/catElectroPogr/CatElectroPogr.jsx';
import LogInPage from '../containers/LogInPage';
import Dashboard from '../containers/Dashboard';
import AddAdvert from '../containers/AddAdvert';

const SiteRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/use-pogr' component={UsePogr} />
      <Route exact path='/clear-snow' component={ClearSnow} />
      <Route exact path='/front-pogr18' component={FrontPogr18} />
      <Route exact path='/telescop-pogr' component={TelescopPogr} />
      <Route exact path='/fork-pogr' component={ForkPogr} />
      <Route exact path='/mini-pogr' component={MiniPogr} />
      <Route exact path='/universal-pogr' component={UniversalPogr} />
      <Route exact path='/front-pogr' component={FrontPogr} />
      <Route exact path='/pogr-build' component={PogrBuilding} />
      <Route exact path='/concept-volvo' component={VolvoConcept} />
      <Route exact path='/concept-case' component={CaseConcept} />
      <Route exact path='/doosan' component={Doosan} />
      <Route exact path='/cat-electro-pogr' component={CatElectroPogr} />
      <Route exact path='/log-in' component={LogInPage} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute exact path='/add-advert' component={AddAdvert} />
    </Switch>
  );
};

export default SiteRouter;
