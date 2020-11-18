import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import DetailPage from './pages/DetailPage'
import Homepage from './pages/HomePage'
import { RESSOURCES } from './constants/search'

export default function Routes() {
    return (
        <BrowserRouter>
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
