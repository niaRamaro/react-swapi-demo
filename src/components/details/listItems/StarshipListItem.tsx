import React from 'react'

import { StarshipInfos } from '../../../types/starship'

type Props = {
    starship: StarshipInfos
}

export default function StarshipListItem({ starship }: Props) {
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
        </ul>
    )
}
