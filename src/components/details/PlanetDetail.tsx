import React from 'react'

import FullPlanetInfos from './infos/FullPlanetInfos'
import { FullPlanet } from '../../types/planet'

type Props = {
    planet: FullPlanet
}

export default function PlanetDetail({ planet }: Props) {
    return <FullPlanetInfos planet={planet} />
}
