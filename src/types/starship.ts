import { CommonRessourceFields } from './common'
import { FullFilm } from './film'
import { FullPerson } from './person'

export type FullStarship = CommonRessourceFields &
    StarshipRelations & {
        id: number
        name: string
        model: string
        starship_class: string
        manufacturer: string
        cost_in_credits: string
        length: string
        crew: string
        passengers: string
        max_atmosphering_speed: string
        hyperdrive_rating: string
        MGLT: string
        cargo_capacity: string
    }

export type StarshipRelations = {
    films: FullFilm[]
    pilots: FullPerson[]
}
