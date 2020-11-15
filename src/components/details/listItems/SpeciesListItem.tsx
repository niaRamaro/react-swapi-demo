import React from 'react'

import { SpeciesInfos } from '../../../types/species'

type Props = {
    species: SpeciesInfos
}

export default function SpeciesListIten({ species }: Props) {
    return (
        <ul>
            <li>
                <span>Name : </span>
                <span>{species.name}</span>
            </li>
            <li>
                <span>Classification : </span>
                <span>{species.classification}</span>
            </li>
            <li>
                <span>Designation : </span>
                <span>{species.designation}</span>
            </li>
        </ul>
    )
}
