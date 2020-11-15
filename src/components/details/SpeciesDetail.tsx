import React from 'react'

import FullSpeciesInfos from './infos/FullSpeciesInfos'
import { FullSpecies } from '../../types/species'

type Props = {
    species: FullSpecies
}

export default function SpeciesDetail({ species }: Props) {
    return <FullSpeciesInfos species={species} />
}
