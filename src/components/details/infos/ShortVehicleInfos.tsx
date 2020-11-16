import React from 'react'

import Info from '../../shared/Info'
import { VehicleInfos } from '../../../types/vehicle'

type Props = {
    vehicle: VehicleInfos
}

export default function ShortVehicleInfos({ vehicle }: Props) {
    return (
        <>
            <Info icon="directions_car" label="Name" value={vehicle.name} />
            <Info icon="scatter_plot" label="Model" value={vehicle.model} />
            <Info
                icon="category"
                label="Vehicle Class"
                value={vehicle.vehicle_class}
            />
            <Info
                icon="corporate_fare"
                label="Manufacturer"
                value={vehicle.manufacturer}
            />
        </>
    )
}
