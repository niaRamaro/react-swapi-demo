import React from 'react'

import FullSpeciesInfos from './infos/FullSpeciesInfos'
import RelationsList from './RelationsList'
import Section from '../shared/Section'
import ShortPlanetInfos from './infos/ShortPlanetInfos'
import { FullSpecies } from '../../types/species'
import { RESSOURCES } from '../../constants/search'

type Props = {
    species: FullSpecies
}

export default function SpeciesDetail({ species }: Props) {
    return (
        <>
            <Section title="SPECIES">
                <FullSpeciesInfos species={species} />
            </Section>

            {!!species.homeworld && (
                <Section title="HOMEWORLD">
                    <ShortPlanetInfos planet={species.homeworld} />
                </Section>
            )}
            {!!species.people.length && (
                <Section title={`PEOPLE (${species.people.length})`}>
                    <RelationsList
                        type={RESSOURCES.PEOPLE}
                        relations={species.people}
                    />
                </Section>
            )}
            {!!species.films.length && (
                <Section title={`FILMS (${species.films.length})`}>
                    <RelationsList
                        type={RESSOURCES.FILMS}
                        relations={species.films}
                    />
                </Section>
            )}
        </>
    )
}
