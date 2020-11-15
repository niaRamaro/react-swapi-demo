import React from 'react'

import FullStarshipInfos from './infos/FullStarshipInfos'
import RelationsList from './RelationsList'
import Section from '../Section'
import { FullStarship } from '../../types/starship'
import { RESSOURCES } from '../../constants/search'

type Props = {
    starship: FullStarship
}

export default function StarshipDetail({ starship }: Props) {
    return (
        <>
            <FullStarshipInfos starship={starship} />

            {!!starship.pilots.length && (
                <Section title="PILOTS">
                    <RelationsList
                        type={RESSOURCES.PEOPLE}
                        relations={starship.pilots}
                    />
                </Section>
            )}
            {!!starship.films.length && (
                <Section title="FILMS">
                    <RelationsList
                        type={RESSOURCES.FILMS}
                        relations={starship.films}
                    />
                </Section>
            )}
        </>
    )
}
