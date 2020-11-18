import React from 'react'

import FilmDetail from '../components/details/FilmDetail'
import FullFilmInfos from '../components/details/infos/FullFilmInfos'
import FullPersonInfos from '../components/details/infos/FullPersonInfos'
import FullPlanetInfos from '../components/details/infos/FullPlanetInfos'
import FullSpeciesInfos from '../components/details/infos/FullSpeciesInfos'
import FullStarshipInfos from '../components/details/infos/FullStarshipInfos'
import FullVehicleInfos from '../components/details/infos/FullVehicleInfos'
import PersonDetail from '../components/details/PersonDetail'
import PlanetDetail from '../components/details/PlanetDetail'
import ShortFilmInfos from '../components/details/infos/ShortFilmInfos'
import ShortPersonInfos from '../components/details/infos/ShortPersonInfos'
import ShortPlanetInfos from '../components/details/infos/ShortPlanetInfos'
import ShortSpeciesInfos from '../components/details/infos/ShortSpeciesInfos'
import ShortStarshipInfos from '../components/details/infos/ShortStarshipInfos'
import ShortVehicleInfos from '../components/details/infos/ShortVehicleInfos'
import SpeciesDetail from '../components/details/SpeciesDetail'
import StarshipDetail from '../components/details/StarshipDetail'
import VehicleDetail from '../components/details/VehicleDetail'
import { FilmInfos, FullFilm } from '../types/film'
import { FullPerson, PersonInfos } from '../types/person'
import { FullPlanet, PlanetInfos } from '../types/planet'
import { FullSpecies, SpeciesInfos } from '../types/species'
import { FullStarship, StarshipInfos } from '../types/starship'
import { FullVehicle, VehicleInfos } from '../types/vehicle'
import { RESSOURCES } from './search'
import { SwapiDetail, SwapiInfos } from '../types/search'

export const RESSOURCE_DETAIL_CONFIGS = {
    [RESSOURCES.FILMS]: (film: SwapiDetail) => (
        <FilmDetail film={film as FullFilm} />
    ),
    [RESSOURCES.PEOPLE]: (person: SwapiDetail) => (
        <PersonDetail person={person as FullPerson} />
    ),
    [RESSOURCES.PLANETS]: (planet: SwapiDetail) => (
        <PlanetDetail planet={planet as FullPlanet} />
    ),
    [RESSOURCES.SPECIES]: (species: SwapiDetail) => (
        <SpeciesDetail species={species as FullSpecies} />
    ),
    [RESSOURCES.STARSHIPS]: (starship: SwapiDetail) => (
        <StarshipDetail starship={starship as FullStarship} />
    ),
    [RESSOURCES.VEHICLES]: (vehicle: SwapiDetail) => (
        <VehicleDetail vehicle={vehicle as FullVehicle} />
    )
}

export const RESSOURCE_COMPONENT_CONFIGS = {
    [RESSOURCES.FILMS]: (film: SwapiInfos, showFull = false) =>
        showFull ? (
            <FullFilmInfos film={film as FilmInfos} />
        ) : (
            <ShortFilmInfos film={film as FilmInfos} />
        ),
    [RESSOURCES.PEOPLE]: (person: SwapiInfos, showFull = false) =>
        showFull ? (
            <FullPersonInfos person={person as PersonInfos} />
        ) : (
            <ShortPersonInfos person={person as PersonInfos} />
        ),
    [RESSOURCES.PLANETS]: (planet: SwapiInfos, showFull = false) =>
        showFull ? (
            <FullPlanetInfos planet={planet as PlanetInfos} />
        ) : (
            <ShortPlanetInfos planet={planet as PlanetInfos} />
        ),
    [RESSOURCES.SPECIES]: (species: SwapiInfos, showFull = false) =>
        showFull ? (
            <FullSpeciesInfos species={species as SpeciesInfos} />
        ) : (
            <ShortSpeciesInfos species={species as SpeciesInfos} />
        ),
    [RESSOURCES.STARSHIPS]: (starship: SwapiInfos, showFull = false) =>
        showFull ? (
            <FullStarshipInfos starship={starship as StarshipInfos} />
        ) : (
            <ShortStarshipInfos starship={starship as StarshipInfos} />
        ),
    [RESSOURCES.VEHICLES]: (vehicle: SwapiInfos, showFull = false) =>
        showFull ? (
            <FullVehicleInfos vehicle={vehicle as VehicleInfos} />
        ) : (
            <ShortVehicleInfos vehicle={vehicle as VehicleInfos} />
        )
}
