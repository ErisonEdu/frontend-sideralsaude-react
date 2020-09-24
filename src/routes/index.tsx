import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SideralGroup from '../pages/sideralpagemain/index';
import SignInSide from '../pages/signinside/SignInSide';
//proximas ROTAS
//import SideralGold from '../pages/sideralgold/SideralGold';
//import SideralOdonto from '../pages/sideralgold/SideralOdonto';
//import SideralSaude from '../pages/sideralgold/SideralSaude';

const Routes: React.FunctionComponent = () => (
        <Switch>
            <Route path="/" exact component={SideralGroup} />
            <Route path="/SignInSide" exact component={SignInSide} />
            {/*Proximas Rotas*/}
            {/*<Route path="/SideralGold" exact component={SideralGold}/>*/}
            {/*<Route path="/SideralOdonto" exact component={SideralOdonto}/>*/}
            {/*<Route path="/SideralSaude" exact component={SideralSaude}/>*/}
        </Switch>
);

export default Routes;