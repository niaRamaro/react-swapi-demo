import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { RESSOURCES } from './constants/search'
import DetailPage from './pages/DetailPage'

import Homepage from './pages/HomePage'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/:type/:id"
                    render={({ match }) => {
                        const type = match.params.type

                        return Object.values(RESSOURCES).includes(type) ? (
                            <DetailPage />
                        ) : (
                            <Redirect to="/" />
                        )
                    }}
                />
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
