import React from 'react'

import FullPlanetInfos from './infos/FullPlanetInfos'
import RelationsList from './RelationsList'
import Section from '../shared/Section'
import { FullPlanet } from '../../types/planet'
import { RESSOURCES } from '../../constants/search'

type Props = {
    planet: FullPlanet
}

export default function PlanetDetail({ planet }: Props) {
    return (
        <>
            <Section title="PLANET">
                <FullPlanetInfos planet={planet} />
            </Section>

            {!!planet.residents.length && (
                <Section title="RESIDENTS">
                    <RelationsList
                        type={RESSOURCES.PEOPLE}
                        relations={planet.residents}
                    />
                </Section>
            )}
            {!!planet.films.length && (
                <Section title="FILMS">
                    <RelationsList
                        type={RESSOURCES.FILMS}
                        relations={planet.films}
                    />
                </Section>
            )}
        </>
    )
}
