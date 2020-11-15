import React from 'react'
import { PersonInfos } from '../../../types/person'

type Props = {
    person: PersonInfos
}

export default function PersonListItem({ person }: Props) {
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
        </ul>
    )
}
