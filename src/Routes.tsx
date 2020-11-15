import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Homepage from './pages/HomePage'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
