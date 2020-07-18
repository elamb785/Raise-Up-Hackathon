import React from 'react';
import { HashRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'

import Home from '../../pages/Home'
import Error from '../../pages/Error'

export default function Routes() {
    return(
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="*" component={Error} />
                </Switch>
            </HashRouter>
        </>
    )
}