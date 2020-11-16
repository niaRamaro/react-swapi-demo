import React, { CSSProperties, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Button from '../shared/Button'
import Card from '../shared/Card'
import { RESSOURCES } from '../../constants/search'
import { RESSOURCE_COMPONENT_CONFIGS } from '../../constants/config'
import { SwapiInfos } from '../../types/search'

import styles from './RelationsListCarousel.module.scss'

type Props = {
    itemsPerRow: number
    relations: SwapiInfos[]
    start: number
    type: RESSOURCES
    setIsTooltipOpen: (isOpen: boolean) => void
    showTooltip: (target: HTMLElement, item: SwapiInfos) => void
}

const itemMargin = 1

export default function RelationsListCarousel({
    itemsPerRow,
    relations,
    start,
    type,
    setIsTooltipOpen,
    showTooltip
}: Props) {
    const { search } = useLocation()
    const getItemComponent = RESSOURCE_COMPONENT_CONFIGS[type]
    const [itemStyle, setItemStyle] = useState<CSSProperties>({})
    const [displayedItems, setDisplayedItems] = useState<SwapiInfos[]>([])

    useEffect(() => {
        const getDisplayedItems = () =>
            relations.slice(start, start + itemsPerRow)
        setDisplayedItems(getDisplayedItems())
    }, [start])

    useEffect(() => {
        const getItemStyle = () => {
            const totalMargin = itemsPerRow * itemMargin * 2
            const width = (100 - totalMargin) / itemsPerRow
            return {
                margin: `${itemMargin}%`,
                width: `${width}%`
            }
        }
        setItemStyle(getItemStyle())
    }, [])

    return (
        <div className={styles.list}>
            {displayedItems.map((item) => (
                <Card style={itemStyle} key={item.id}>
                    {getItemComponent(item)}

                    <div className={styles.buttonContainer}>
                        <Button
                            className={styles.button}
                            onMouseOver={({ target }) =>
                                showTooltip(target as HTMLElement, item)
                            }
                            onMouseOut={(_) => setIsTooltipOpen(false)}
                        >
                            Show More
                        </Button>

                        <Link
                            to={{
                                pathname: `/${type}/${item.id}`,
                                search
                            }}
                        >
                            <Button className={styles.button}>
                                Go to full detail
                            </Button>
                        </Link>
                    </div>
                </Card>
            ))}
        </div>
    )
}
