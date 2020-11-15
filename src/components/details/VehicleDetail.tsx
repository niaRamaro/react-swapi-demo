import React from 'react'

import FullVehicleInfos from './infos/FullVehicleInfos'
import { FullVehicle } from '../../types/vehicle'

type Props = {
    vehicle: FullVehicle
}

export default function VehicleDetail({ vehicle }: Props) {
    return <FullVehicleInfos vehicle={vehicle} />
}
