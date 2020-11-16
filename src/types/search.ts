import { FilmInfos, FullFilm } from './film'
import { FullPerson, PersonInfos } from './person'
import { FullPlanet, PlanetInfos } from './planet'
import { FullSpecies, SpeciesInfos } from './species'
import { FullStarship, StarshipInfos } from './starship'
import { FullVehicle, VehicleInfos } from './vehicle'
import { RESSOURCES } from '../constants/search'

export type SearchQuery = {
    type: string
    keyword: string
}

export type SearchResult = {
    count: number
    next: number
    previous: number
    results: SwapiResultItem[]
}

export type ResultTree = {
    [key in RESSOURCES]: SearchResult | null
}

export type SwapiResultItem = {
    name: string
    id: number
}

export type SwapiDetail =
    | FullFilm
    | FullPerson
    | FullPlanet
    | FullSpecies
    | FullStarship
    | FullVehicle

export type SwapiInfos =
    | FilmInfos
    | PersonInfos
    | PlanetInfos
    | SpeciesInfos
    | StarshipInfos
    | VehicleInfos
