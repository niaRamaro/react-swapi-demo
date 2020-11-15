import React from 'react'

import { StarshipInfos } from '../../../types/starship'

type Props = {
    starship: StarshipInfos
}

export default function FullStarshipInfos({ starship }: Props) {
    return (
        <ul>
            <li>
                <span>Name : </span>
                <span>{starship.name}</span>
            </li>
            <li>
                <span>Model : </span>
                <span>{starship.model}</span>
            </li>
            <li>
                <span>Starship Class : </span>
                <span>{starship.starship_class}</span>
            </li>
            <li>
                <span>Manufacturer : </span>
                <span>{starship.manufacturer}</span>
            </li>
            <li>
                <span>Cost In Credits : </span>
                <span>{starship.cost_in_credits}</span>
            </li>
            <li>
                <span>Length : </span>
                <span>{starship.length}</span>
            </li>
            <li>
                <span>Crew : </span>
                <span>{starship.crew}</span>
            </li>
            <li>
                <span>Passengers : </span>
                <span>{starship.passengers}</span>
            </li>
            <li>
                <span>Max Atmosphering Speed : </span>
                <span>{starship.max_atmosphering_speed}</span>
            </li>
            <li>
                <span>Hyperdrive Rating: </span>
                <span>{starship.hyperdrive_rating}</span>
            </li>
            <li>
                <span>MGLT : </span>
                <span>{starship.MGLT}</span>
            </li>
            <li>
                <span>Cargo Capacity : </span>
                <span>{starship.cargo_capacity}</span>
            </li>
        </ul>
    )
}
