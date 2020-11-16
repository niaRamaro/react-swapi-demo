import React from 'react'

import Info from '../../shared/Info'
import ShortPersonInfos from './ShortPersonInfos'
import { PersonInfos } from '../../../types/person'

type Props = {
    person: PersonInfos
}

export default function FullPersonInfos({ person }: Props) {
    return (
        <>
            <ShortPersonInfos person={person} />
            <Info icon="palette" label="Skin Color" value={person.skin_color} />
            <Info icon="palette" label="Eye Color" value={person.eye_color} />
            <Info icon="palette" label="Hair Color" value={person.hair_color} />
            <Info icon="adjust" label="Mass" value={person.mass} />
            <Info icon="height" label="Height" value={person.height} />
        </>
    )
}
