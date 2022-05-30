import * as React from 'react'
import { IntlProvider } from 'react-intl'
import {
    Route,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

import Welcome from '@/pages/welcome'
import Login from '@/pages/Login/main'
import CreateEvents from '@/pages/CreateEvents'
import Donation from '@/pages/donation'
import Auction from '@/pages/donation/auction'

import './App.scss'
//Toast

export function App(): JSX.Element {
    return (
        <IntlProvider
            key="intl"
            locale="en"
            defaultLocale="en"
            
        >
            <Router>
                <div className="wrapper">
                   
                    <main className="main">
                        <Switch>
                         
                            <Route exact path="/">
                                <Welcome />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/CreateEvents">
                                <CreateEvents />
                            </Route>
                         
                            <Route exact path="/donation">
                                <Donation />
                            </Route>
                            <Route exact path='/donation/auction'>
                                <Auction />
                            </Route> 
                      
                        </Switch>
                    </main>
                  
                </div>
            </Router>
        </IntlProvider>
    )


}
