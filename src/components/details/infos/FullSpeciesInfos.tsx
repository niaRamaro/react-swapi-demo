import React from 'react'

import { SpeciesInfos } from '../../../types/species'

type Props = {
    species: SpeciesInfos
}

export default function FullSpeciesInfos({ species }: Props) {
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
            <li>
                <span>Average Height : </span>
                <span>{species.average_height}</span>
            </li>
            <li>
                <span>Average Lifespan : </span>
                <span>{species.average_lifespan}</span>
            </li>
            <li>
                <span>Eye Colors : </span>
                <span>{species.eye_colors}</span>
            </li>
            <li>
                <span>Hair Colors : </span>
                <span>{species.hair_colors}</span>
            </li>
            <li>
                <span>Skin Colors : </span>
                <span>{species.skin_colors}</span>
            </li>
            <li>
                <span>Language : </span>
                <span>{species.language}</span>
            </li>
        </ul>
    )
}
