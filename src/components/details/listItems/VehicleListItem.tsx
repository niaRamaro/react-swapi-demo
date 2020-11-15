import React from 'react'

import { VehicleInfos } from '../../../types/vehicle'

type Props = {
    vehicle: VehicleInfos
}

export default function VehicleListItem({ vehicle }: Props) {
    return (
        <ul>
            <li>
                <span>Name : </span>
                <span>{vehicle.name}</span>
            </li>
            <li>
                <span>Model : </span>
                <span>{vehicle.model}</span>
            </li>
            <li>
                <span>Vehicle Class : </span>
                <span>{vehicle.vehicle_class}</span>
            </li>
            <li>
                <span>Manufacturer : </span>
                <span>{vehicle.manufacturer}</span>
            </li>
        </ul>
    )
}
