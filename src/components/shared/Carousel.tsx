import React, { ReactNode, useEffect, useState } from 'react'

import Button from './Button'
import MaterialIcon from './MaterialIcon'
import { SwapiInfos } from '../../types/search'

import styles from './Carousel.module.scss'

type Props = {
    itemsPerRow?: number
    items: any[]
    render: (items: any) => ReactNode
}

export default function Carousel({ itemsPerRow = 3, items, render }: Props) {
    const [start, setStart] = useState(0)
    const [displayedItems, setDisplayedItems] = useState<SwapiInfos[]>([])

    useEffect(() => {
        const getDisplayedItems = () => items.slice(start, start + itemsPerRow)
        setDisplayedItems(getDisplayedItems())
    }, [start])

    return (
        <>
            <Button
                onClick={(_) => setStart(start - itemsPerRow)}
                disabled={start === 0}
            >
                <MaterialIcon icon="chevron_left" />
            </Button>

            <div className={styles.list}>{render(displayedItems)}</div>

            <Button
                onClick={(_) => setStart(start + itemsPerRow)}
                disabled={start + itemsPerRow >= items.length}
            >
                <MaterialIcon icon="chevron_right" />
            </Button>
        </>
    )
}
