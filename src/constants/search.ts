export enum RESSOURCES {
    FILMS = 'films',
    PEOPLE = 'people',
    PLANETS = 'planets',
    SPECIES = 'species',
    STARSHIPS = 'starships',
    VEHICLES = 'vehicles'
}

export const RELATION_ITEM_PER_ROW = {
    [RESSOURCES.FILMS]: 3,
    [RESSOURCES.PEOPLE]: 3,
    [RESSOURCES.PLANETS]: 2,
    [RESSOURCES.SPECIES]: 3,
    [RESSOURCES.STARSHIPS]: 2,
    [RESSOURCES.VEHICLES]: 2
}
