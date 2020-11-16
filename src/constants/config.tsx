import React from 'react'

import FullFilmInfos from '../components/details/infos/FullFilmInfos'
import FullPersonInfos from '../components/details/infos/FullPersonInfos'
import FullPlanetInfos from '../components/details/infos/FullPlanetInfos'
import FullSpeciesInfos from '../components/details/infos/FullSpeciesInfos'
import FullStarshipInfos from '../components/details/infos/FullStarshipInfos'
import FullVehicleInfos from '../components/details/infos/FullVehicleInfos'
import ShortFilmInfos from '../components/details/infos/ShortFilmInfos'
import ShortPersonInfos from '../components/details/infos/ShortPersonInfos'
import ShortPlanetInfos from '../components/details/infos/ShortPlanetInfos'
import ShortSpeciesInfos from '../components/details/infos/ShortSpeciesInfos'
import ShortStarshipInfos from '../components/details/infos/ShortStarshipInfos'
import ShortVehicleInfos from '../components/details/infos/ShortVehicleInfos'
import { FilmInfos } from '../types/film'
import { PersonInfos } from '../types/person'
import { PlanetInfos } from '../types/planet'
import { RESSOURCES } from './search'
import { SpeciesInfos } from '../types/species'
import { StarshipInfos } from '../types/starship'
import { SwapiInfos } from '../types/search'
import { VehicleInfos } from '../types/vehicle'

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
