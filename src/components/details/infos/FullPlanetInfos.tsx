import React from 'react'

import Info from '../../shared/Info'
import { PlanetInfos } from '../../../types/planet'

type Props = {
    planet: PlanetInfos
}

export default function FullPlanetInfos({ planet }: Props) {
    return (
        <>
            <Info icon="public" label="Name" value={planet.name} />
            <Info
                icon="not_interested"
                label="Diameter"
                value={planet.diameter}
            />
            <Info
                icon="360"
                label="Rotation Period"
                value={planet.rotation_period}
            />
            <Info
                icon="settings_backup_restore"
                label="Orbital Period"
                value={planet.orbital_period}
            />
            <Info
                icon="arrow_downward"
                label="Gravity"
                value={planet.gravity}
            />
            <Info icon="groups" label="Population" value={planet.population} />
            <Info icon="wb_sunny" label="Climate" value={planet.climate} />
            <Info icon="terrain" label="Terrain" value={planet.terrain} />
            <Info
                icon="waves"
                label="Surface Water"
                value={planet.surface_water}
            />
        </>
    )
}
