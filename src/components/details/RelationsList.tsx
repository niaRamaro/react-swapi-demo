import React from 'react'

import Card from '../shared/Card'
import ShortFilmInfos from './infos/ShortFilmInfos'
import ShortPersonInfos from './infos/ShortPersonInfos'
import ShortPlanetInfos from './infos/ShortPlanetInfos'
import ShortSpeciesInfos from './infos/ShortSpeciesInfos'
import ShortStarshipInfos from './infos/ShortStarshipInfos'
import ShortVehicleInfos from './infos/ShortVehicleInfos'
import { FilmInfos } from '../../types/film'
import { PersonInfos } from '../../types/person'
import { PlanetInfos } from '../../types/planet'
import { RESSOURCES } from '../../constants/search'
import { SpeciesInfos } from '../../types/species'
import { StarshipInfos } from '../../types/starship'
import { SwapiInfos } from '../../types/search'
import { VehicleInfos } from '../../types/vehicle'

type Props = {
    type: RESSOURCES
    relations: SwapiInfos[]
}

const itemMap = {
    [RESSOURCES.FILMS]: (film: SwapiInfos, key: number) => (
        <ShortFilmInfos film={film as FilmInfos} key={key} />
    ),
    [RESSOURCES.PEOPLE]: (person: SwapiInfos, key: number) => (
        <ShortPersonInfos person={person as PersonInfos} key={key} />
    ),
    [RESSOURCES.PLANETS]: (planet: SwapiInfos, key: number) => (
        <ShortPlanetInfos planet={planet as PlanetInfos} key={key} />
    ),
    [RESSOURCES.SPECIES]: (species: SwapiInfos, key: number) => (
        <ShortSpeciesInfos species={species as SpeciesInfos} key={key} />
    ),
    [RESSOURCES.STARSHIPS]: (starship: SwapiInfos, key: number) => (
        <ShortStarshipInfos starship={starship as StarshipInfos} key={key} />
    ),
    [RESSOURCES.VEHICLES]: (vehicle: SwapiInfos, key: number) => (
        <ShortVehicleInfos vehicle={vehicle as VehicleInfos} key={key} />
    )
}

export default function RelationsList({ type, relations }: Props) {
    const component = itemMap[type]

    return (
        <>
            {relations.map((item, index) => (
                <Card>{component(item, index)}</Card>
            ))}
        </>
    )
}
