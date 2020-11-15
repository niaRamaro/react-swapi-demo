import React from 'react'

import FilmListItem from './listItems/FilmListItem'
import PersonListItem from './listItems/PersonListItem'
import PlanetListItem from './listItems/PlanetListItem'
import SpeciesListIten from './listItems/SpeciesListItem'
import StarshipListItem from './listItems/StarshipListItem'
import VehicleListItem from './listItems/VehicleListItem'
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
        <FilmListItem film={film as FilmInfos} key={key} />
    ),
    [RESSOURCES.PEOPLE]: (person: SwapiInfos, key: number) => (
        <PersonListItem person={person as PersonInfos} key={key} />
    ),
    [RESSOURCES.PLANETS]: (planet: SwapiInfos, key: number) => (
        <PlanetListItem planet={planet as PlanetInfos} key={key} />
    ),
    [RESSOURCES.SPECIES]: (species: SwapiInfos, key: number) => (
        <SpeciesListIten species={species as SpeciesInfos} key={key} />
    ),
    [RESSOURCES.STARSHIPS]: (starship: SwapiInfos, key: number) => (
        <StarshipListItem starship={starship as StarshipInfos} key={key} />
    ),
    [RESSOURCES.VEHICLES]: (vehicle: SwapiInfos, key: number) => (
        <VehicleListItem vehicle={vehicle as VehicleInfos} key={key} />
    )
}

export default function RelationsList({ type, relations }: Props) {
    const component = itemMap[type]

    return (
        <>
            <div>{relations.map((item, index) => component(item, index))}</div>
        </>
    )
}
