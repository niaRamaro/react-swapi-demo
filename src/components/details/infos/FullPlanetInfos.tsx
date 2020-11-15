import React from 'react'

import { PlanetInfos } from '../../../types/planet'

type Props = {
    planet: PlanetInfos
}

export default function FullPlanetInfos({ planet }: Props) {
    return (
        <ul>
            <li>
                <span>Name : </span>
                <span>{planet.name}</span>
            </li>
            <li>
                <span>Diameter : </span>
                <span>{planet.diameter}</span>
            </li>
            <li>
                <span>Rotation Period : </span>
                <span>{planet.rotation_period}</span>
            </li>
            <li>
                <span>Orbital Period : </span>
                <span>{planet.orbital_period}</span>
            </li>
            <li>
                <span>Gravity : </span>
                <span>{planet.gravity}</span>
            </li>
            <li>
                <span>Population : </span>
                <span>{planet.population}</span>
            </li>
            <li>
                <span>Climate : </span>
                <span>{planet.climate}</span>
            </li>
            <li>
                <span>Terrain : </span>
                <span>{planet.terrain}</span>
            </li>
            <li>
                <span>Surface Water : </span>
                <span>{planet.surface_water}</span>
            </li>
        </ul>
    )
}
