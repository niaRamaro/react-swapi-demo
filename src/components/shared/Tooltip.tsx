import React from 'react'

import Card from './Card'

export type TooltipCoordinates = {
    left: number
    bottom: number
}

type Props = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    coords: TooltipCoordinates
}

export default function Tooltip({ children, coords }: Props) {
    return (
        <div style={{ position: 'absolute', ...coords }}>
            <Card>{children}</Card>
        </div>
    )
}
