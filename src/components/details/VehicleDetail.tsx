import React from 'react'

import FullVehicleInfos from './infos/FullVehicleInfos'
import RelationsList from './RelationsList'
import Section from '../shared/Section'
import { FullVehicle } from '../../types/vehicle'
import { RESSOURCES } from '../../constants/search'

import styles from './Details.module.scss'

type Props = {
    vehicle: FullVehicle
}

export default function VehicleDetail({ vehicle }: Props) {
    return (
        <div className={styles.detail}>
            <Section title="VEHICLE">
                <FullVehicleInfos vehicle={vehicle} />
            </Section>

            {!!vehicle.pilots.length && (
                <Section title={`PILOTS (${vehicle.pilots.length})`}>
                    <RelationsList
                        type={RESSOURCES.PEOPLE}
                        relations={vehicle.pilots}
                    />
                </Section>
            )}
            {!!vehicle.films.length && (
                <Section title={`FILMS (${vehicle.films.length})`}>
                    <RelationsList
                        type={RESSOURCES.FILMS}
                        relations={vehicle.films}
                    />
                </Section>
            )}
        </div>
    )
}
