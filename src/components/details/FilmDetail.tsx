import React from 'react'

import FullFilmInfos from './infos/FullFilmInfos'
import RelationsList from './RelationsList'
import Section from '../shared/Section'
import { FullFilm } from '../../types/film'
import { RESSOURCES } from '../../constants/search'

type Props = {
    film: FullFilm
}

export default function FilmDetail({ film }: Props) {
    return (
        <>
            <Section title="FILM">
                <FullFilmInfos film={film} />
            </Section>

            {!!film.characters.length && (
                <Section title={`CHARACTERS (${film.characters.length})`}>
                    <RelationsList
                        type={RESSOURCES.PEOPLE}
                        relations={film.characters}
                    />
                </Section>
            )}
            {!!film.planets.length && (
                <Section title={`PLANETS (${film.planets.length})`}>
                    <RelationsList
                        type={RESSOURCES.PLANETS}
                        relations={film.planets}
                    />
                </Section>
            )}
            {!!film.starships.length && (
                <Section title={`STARSHIPS (${film.starships.length})`}>
                    <RelationsList
                        type={RESSOURCES.STARSHIPS}
                        relations={film.starships}
                    />
                </Section>
            )}
            {!!film.vehicles.length && (
                <Section title={`VEHICLES (${film.vehicles.length})`}>
                    <RelationsList
                        type={RESSOURCES.VEHICLES}
                        relations={film.vehicles}
                    />
                </Section>
            )}
            {!!film.species.length && (
                <Section title={`SPECIES (${film.species.length})`}>
                    <RelationsList
                        type={RESSOURCES.SPECIES}
                        relations={film.species}
                    />
                </Section>
            )}
        </>
    )
}
