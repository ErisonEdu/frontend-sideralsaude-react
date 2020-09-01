import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SideralGroup from '../pages/sideralpagemain/index';
import SignInSide from '../pages/signinside/SignInSide';

const Routes: React.FunctionComponent = () => (
        <Switch>
            <Route path="/" exact component={SideralGroup} />
            <Route path="/SignInSide" exact component={SignInSide} />
        </Switch>
);

export default Routes;