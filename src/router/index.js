import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Brand from '../views/Brand';
import PageNotFound from '../views/errors/PageNotFound';
import Reseller from '../views/Reseller';
import Foundingfather from '../views/Foundingfather';

function router(props) {
    return (
        <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/brand'><Brand/></Route>
            <Route exact path='/reseller'><Reseller/></Route>
            <Route exact path='/drgagus'><Foundingfather whatsapp="6285264659191"/></Route>
            <Route exact path='/drgera'><Foundingfather whatsapp="6281289194898"/></Route>
            <Route exact path='/khon'><Foundingfather whatsapp="6282371303747"/></Route>
            <Route exact path='/asep'><Foundingfather whatsapp="6281213966657"/></Route>
            <Route path='*' component={PageNotFound}/>
        </Switch>
    );
}

export default router;