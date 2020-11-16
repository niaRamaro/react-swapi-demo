import React from 'react'

import Info from '../../shared/Info'
import { SpeciesInfos } from '../../../types/species'

type Props = {
    species: SpeciesInfos
}

export default function ShortSpeciesInfos({ species }: Props) {
    return (
        <>
            <Info icon="people" label="Name" value={species.name} />
            <Info
                icon="category"
                label="Classification"
                value={species.classification}
            />
            <Info
                icon="psychology"
                label="Designation"
                value={species.designation}
            />
        </>
    )
}
