import React from 'react'

import { PlanetInfos } from '../../../types/planet'

type Props = {
    planet: PlanetInfos
}

export default function PlanetListItem({ planet }: Props) {
    return (
        <ul>
            <li>
                <span>Name : </span>
                <span>{planet.name}</span>
            </li>
            <li>
                <span>Population : </span>
                <span>{planet.population}</span>
            </li>
            <li>
                <span>Terrain : </span>
                <span>{planet.terrain}</span>
            </li>
        </ul>
    )
}
