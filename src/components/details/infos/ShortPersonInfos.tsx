import React from 'react'

import Info from '../../shared/Info'
import { PersonInfos } from '../../../types/person'

type Props = {
    person: PersonInfos
}

export default function ShortPersonInfos({ person }: Props) {
    return (
        <>
            <Info icon="face" label="Name" value={person.name} />
            <Info icon="wc" label="Gender" value={person.gender} />
            <Info icon="event" label="Birth Year" value={person.birth_year} />
        </>
    )
}
