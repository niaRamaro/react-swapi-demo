import React from 'react'

import { PersonInfos } from '../../../types/person'

type Props = {
    person: PersonInfos
}

export default function FullPersonInfos({ person }: Props) {
    return (
        <ul>
            <li>
                <span>Name : </span>
                <span>{person.name}</span>
            </li>
            <li>
                <span>Gender : </span>
                <span>{person.gender}</span>
            </li>
            <li>
                <span>Birth Year : </span>
                <span>{person.birth_year}</span>
            </li>
            <li>
                <span>Skin Color : </span>
                <span>{person.skin_color}</span>
            </li>
            <li>
                <span>Eye Color : </span>
                <span>{person.eye_color}</span>
            </li>
            <li>
                <span>Hair Color : </span>
                <span>{person.hair_color}</span>
            </li>
            <li>
                <span>Mass : </span>
                <span>{person.mass}</span>
            </li>
            <li>
                <span>Height : </span>
                <span>{person.height}</span>
            </li>
        </ul>
    )
}
