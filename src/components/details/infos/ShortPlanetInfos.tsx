import React from 'react'

import Info from '../../shared/Info'
import { PlanetInfos } from '../../../types/planet'

type Props = {
    planet: PlanetInfos
}

export default function ShortPlanetInfos({ planet }: Props) {
    return (
        <>
            <Info icon="public" label="Name" value={planet.name} />
            <Info icon="groups" label="Population" value={planet.population} />
            <Info icon="wb_sunny" label="Climate" value={planet.climate} />
            <Info icon="terrain" label="Terrain" value={planet.terrain} />
        </>
    )
}
