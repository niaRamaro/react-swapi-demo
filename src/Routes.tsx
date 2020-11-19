import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import DetailPage from './pages/DetailPage'
import Homepage from './pages/HomePage'
import { RESSOURCES } from './constants/search'

const baseName = process.env.REACT_APP_ROUTE_BASENAME || '/'

export default function Routes() {
    return (
        <BrowserRouter basename={baseName}>
            <Switch>
                <Route path="/" exact>
                    <Homepage />
                </Route>

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

                <Route path="*">
                    <Homepage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
