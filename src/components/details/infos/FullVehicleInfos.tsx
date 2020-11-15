import React from 'react'

import { VehicleInfos } from '../../../types/vehicle'

type Props = {
    vehicle: VehicleInfos
}

export default function FullVehicleInfos({ vehicle }: Props) {
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
            <li>
                <span>Length : </span>
                <span>{vehicle.length}</span>
            </li>
            <li>
                <span>Cost In Credits : </span>
                <span>{vehicle.cost_in_credits}</span>
            </li>
            <li>
                <span>Crew : </span>
                <span>{vehicle.crew}</span>
            </li>
            <li>
                <span>Passengers : </span>
                <span>{vehicle.passengers}</span>
            </li>
            <li>
                <span>Max Atmosphering Speed : </span>
                <span>{vehicle.max_atmosphering_speed}</span>
            </li>
            <li>
                <span>Capacity : </span>
                <span>{vehicle.cargo_capacity}</span>
            </li>
            <li>
                <span>Consumables : </span>
                <span>{vehicle.consumables}</span>
            </li>
        </ul>
    )
}
