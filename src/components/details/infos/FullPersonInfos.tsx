import React from 'react'

import Info from '../../shared/Info'
import { PersonInfos } from '../../../types/person'

type Props = {
    person: PersonInfos
}

export default function FullPersonInfos({ person }: Props) {
    return (
        <>
            <Info icon="face" label="Name" value={person.name} />
            <Info icon="wc" label="Gender" value={person.gender} />
            <Info icon="event" label="Birth Year" value={person.birth_year} />
            <Info icon="palette" label="Skin Color" value={person.skin_color} />
            <Info icon="palette" label="Eye Color" value={person.eye_color} />
            <Info icon="palette" label="Hair Color" value={person.hair_color} />
            <Info icon="adjust" label="Mass" value={person.mass} />
            <Info icon="height" label="Height" value={person.height} />
        </>
    )
}
