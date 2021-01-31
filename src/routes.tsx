import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DWF from './pages/DWF';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return ( 
    <Switch>
        <Route path="/" exact component={DWF} />
    </Switch>
  );
}

export default Routes;