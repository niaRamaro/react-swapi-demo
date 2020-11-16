import React from 'react'

import FullStarshipInfos from './infos/FullStarshipInfos'
import RelationsList from './RelationsList'
import Section from '../shared/Section'
import { FullStarship } from '../../types/starship'
import { RESSOURCES } from '../../constants/search'

type Props = {
    starship: FullStarship
}

export default function StarshipDetail({ starship }: Props) {
    return (
        <>
            <Section title="STARSHIP">
                <FullStarshipInfos starship={starship} />
            </Section>

            {!!starship.pilots.length && (
                <Section title={`PILOTS (${starship.pilots.length})`}>
                    <RelationsList
                        type={RESSOURCES.PEOPLE}
                        relations={starship.pilots}
                    />
                </Section>
            )}
            {!!starship.films.length && (
                <Section title={`FILMS (${starship.films.length})`}>
                    <RelationsList
                        type={RESSOURCES.FILMS}
                        relations={starship.films}
                    />
                </Section>
            )}
        </>
    )
}
