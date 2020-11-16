import React from 'react'

import Info from '../../shared/Info'
import { SpeciesInfos } from '../../../types/species'

type Props = {
    species: SpeciesInfos
}

export default function FullSpeciesInfos({ species }: Props) {
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
            <Info
                icon="height"
                label="Average Height"
                value={species.average_height}
            />
            <Info
                icon="elderly"
                label="Average Lifespan"
                value={species.average_lifespan}
            />
            <Info
                icon="palette"
                label="Eye Colors"
                value={species.eye_colors}
            />
            <Info
                icon="palette"
                label="Hair Colors"
                value={species.hair_colors}
            />
            <Info
                icon="palette"
                label="Skin Colors"
                value={species.skin_colors}
            />
            <Info
                icon="record_voice_over"
                label="Language"
                value={species.language}
            />
        </>
    )
}
