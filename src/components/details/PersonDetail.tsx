import React from 'react'

import FullPersonInfos from './infos/FullPersonInfos'
import RelationsList from './RelationsList'
import Section from '../shared/Section'
import ShortPlanetInfos from './infos/ShortPlanetInfos'
import { FullPerson } from '../../types/person'
import { RESSOURCES } from '../../constants/search'

type Props = {
    person: FullPerson
}

export default function PersonDetail({ person }: Props) {
    return (
        <>
            <Section title="PERSON">
                <FullPersonInfos person={person} />
            </Section>

            {!!person.films.length && (
                <Section title="FILMS">
                    <RelationsList
                        type={RESSOURCES.FILMS}
                        relations={person.films}
                    />
                </Section>
            )}
            {!!person.homeworld && (
                <Section title="HOMEWORLD">
                    <ShortPlanetInfos planet={person.homeworld} />
                </Section>
            )}
            {!!person.species.length && (
                <Section title="SPECIES">
                    <RelationsList
                        type={RESSOURCES.SPECIES}
                        relations={person.species}
                    />
                </Section>
            )}
            {!!person.starships.length && (
                <Section title="STARSHIPS">
                    <RelationsList
                        type={RESSOURCES.STARSHIPS}
                        relations={person.starships}
                    />
                </Section>
            )}
            {!!person.vehicles.length && (
                <Section title="SPECIES">
                    <RelationsList
                        type={RESSOURCES.VEHICLES}
                        relations={person.vehicles}
                    />
                </Section>
            )}
        </>
    )
}
