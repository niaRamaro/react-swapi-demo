import React from 'react'

import Info from '../../shared/Info'
import ShortPlanetInfos from './ShortPlanetInfos'
import { PlanetInfos } from '../../../types/planet'

type Props = {
    planet: PlanetInfos
}

export default function FullPlanetInfos({ planet }: Props) {
    return (
        <>
            <ShortPlanetInfos planet={planet} />{' '}
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
            <Info
                icon="waves"
                label="Surface Water"
                value={planet.surface_water}
            />
        </>
    )
}
