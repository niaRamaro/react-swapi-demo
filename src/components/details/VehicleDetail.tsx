import React from 'react'

import FullVehicleInfos from './infos/FullVehicleInfos'
import RelationsList from './RelationsList'
import Section from '../Section'
import { FullVehicle } from '../../types/vehicle'
import { RESSOURCES } from '../../constants/search'

type Props = {
    vehicle: FullVehicle
}

export default function VehicleDetail({ vehicle }: Props) {
    return (
        <>
            <FullVehicleInfos vehicle={vehicle} />

            {!!vehicle.pilots.length && (
                <Section title="PILOTS">
                    <RelationsList
                        type={RESSOURCES.PEOPLE}
                        relations={vehicle.pilots}
                    />
                </Section>
            )}
            {!!vehicle.films.length && (
                <Section title="FILMS">
                    <RelationsList
                        type={RESSOURCES.FILMS}
                        relations={vehicle.films}
                    />
                </Section>
            )}
        </>
    )
}
