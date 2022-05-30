import React, { lazy } from 'react'

import {
    Route,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'
import { Header } from '@/components/layout/Header';
import Welcome from '@/pages/welcome'
import Login from '@/pages/Login/main'
import CreateEvents from '@/pages/CreateEvents'
import Donation from '@/pages/donation'
import Auction from '@/pages/donation/auction'

import './App.scss'
//Toast

export function App(): JSX.Element {
    return (
        <Router>
            <div className="wrapper">
                <main className="main">

                    <Switch>
                        <Route exact path="/donation/auction" component={lazy(() => Auction)} />
                        {/*
                        <Route exact path="/" component={lazy(() => Welcome)} />
                        <Route exact path="/login" component={lazy(() => Login)} />
                        <Route exact path="/CreateEvents" component={lazy(() => CreateEvents)} />
                        <Route exact path="/donation" component={lazy(() => Donation)} />
                        */}

                    </Switch>
                </main>

            </div>
        </Router>
    )


}
