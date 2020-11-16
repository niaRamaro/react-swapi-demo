import React from 'react'

import FullSpeciesInfos from './infos/FullSpeciesInfos'
import PlanetListItem from './listItems/PlanetListItem'
import RelationsList from './RelationsList'
import Section from '../shared/Section'
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
                    <PlanetListItem planet={species.homeworld} />
                </Section>
            )}
            {!!species.people.length && (
                <Section title="PEOPLE">
                    <RelationsList
                        type={RESSOURCES.PEOPLE}
                        relations={species.people}
                    />
                </Section>
            )}
            {!!species.films.length && (
                <Section title="FILMS">
                    <RelationsList
                        type={RESSOURCES.FILMS}
                        relations={species.films}
                    />
                </Section>
            )}
        </>
    )
}
