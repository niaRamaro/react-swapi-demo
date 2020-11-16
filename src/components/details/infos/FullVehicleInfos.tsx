import React from 'react'

import Info from '../../shared/Info'
import ShortVehicleInfos from './ShortVehicleInfos'
import { VehicleInfos } from '../../../types/vehicle'

type Props = {
    vehicle: VehicleInfos
}

export default function FullVehicleInfos({ vehicle }: Props) {
    return (
        <>
            <ShortVehicleInfos vehicle={vehicle} />
            <Info icon="straighten" label="Length" value={vehicle.length} />
            <Info
                icon="credit_card"
                label="Cost In Credits"
                value={vehicle.cost_in_credits}
            />
            <Info icon="groups" label="Crew" value={vehicle.crew} />
            <Info
                icon="reduce_capacity"
                label="Passengers"
                value={vehicle.passengers}
            />
            <Info
                icon="speed"
                label="Max Atmosphering Speed"
                value={vehicle.max_atmosphering_speed}
            />
            <Info
                icon="luggage"
                label="Capacity"
                value={vehicle.cargo_capacity}
            />
            <Info
                icon="opacity"
                label="Consumables"
                value={vehicle.consumables}
            />
        </>
    )
}
