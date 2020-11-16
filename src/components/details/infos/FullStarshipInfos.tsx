import React from 'react'

import Info from '../../shared/Info'
import ShortStarshipInfos from './ShortStarshipInfos'
import { StarshipInfos } from '../../../types/starship'

type Props = {
    starship: StarshipInfos
}

export default function FullStarshipInfos({ starship }: Props) {
    return (
        <>
            <ShortStarshipInfos starship={starship} />
            <Info
                icon="credit_card"
                label="Cost In Credits"
                value={starship.cost_in_credits}
            />
            <Info icon="straighten" label="Length" value={starship.length} />
            <Info icon="groups" label="Crew" value={starship.crew} />
            <Info
                icon="reduce_capacity"
                label="Passengers"
                value={starship.passengers}
            />
            <Info
                icon="speed"
                label="Max Atmosphering Speed"
                value={starship.max_atmosphering_speed}
            />
            <Info
                icon="star"
                label="Hyperdrive Rating"
                value={starship.hyperdrive_rating}
            />
            <Info icon="flash_on" label="MGLT" value={starship.MGLT} />
            <Info
                icon="luggage"
                label="Cargo Capacity"
                value={starship.cargo_capacity}
            />
        </>
    )
}
