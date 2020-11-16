import React from 'react'

import Info from '../../shared/Info'
import { StarshipInfos } from '../../../types/starship'

type Props = {
    starship: StarshipInfos
}

export default function ShortStarshipInfos({ starship }: Props) {
    return (
        <>
            <Info
                icon="airplanemode_active"
                label="Name"
                value={starship.name}
            />
            <Info icon="scatter_plot" label="Model" value={starship.model} />
            <Info
                icon="category"
                label="Starship Class"
                value={starship.starship_class}
            />
            <Info
                icon="corporate_fare"
                label="Manufacturer"
                value={starship.manufacturer}
            />
        </>
    )
}
