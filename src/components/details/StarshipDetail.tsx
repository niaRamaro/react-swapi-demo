import React from 'react'

import FullStarshipInfos from './infos/FullStarshipInfos'
import { FullStarship } from '../../types/starship'

type Props = {
    starship: FullStarship
}

export default function StarshipDetail({ starship }: Props) {
    return <FullStarshipInfos starship={starship} />
}
