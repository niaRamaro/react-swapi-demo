import React from 'react'
import { motion } from 'framer-motion'

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
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: [-10, 0] }}
            exit={{ y: -750 }}
            style={{ position: 'absolute', ...coords }}
        >
            <Card>{children}</Card>
        </motion.div>
    )
}
