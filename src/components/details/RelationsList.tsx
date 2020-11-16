import React, { useState, useRef } from 'react'

import Button from '../shared/Button'
import MaterialIcon from '../shared/MaterialIcon'
import Portal from '../shared/Portal'
import RelationsListCarousel from './RelationsListCarousel'
import Tooltip, { TooltipCoordinates } from '../shared/Tooltip'
import { RELATION_ITEM_PER_ROW, RESSOURCES } from '../../constants/search'
import { RESSOURCE_COMPONENT_CONFIGS } from '../../constants/config'
import { SwapiInfos } from '../../types/search'

type Props = {
    type: RESSOURCES
    relations: SwapiInfos[]
}

export default function RelationsList({ type, relations }: Props) {
    const itemsPerRow = RELATION_ITEM_PER_ROW[type]
    const getItemComponent = RESSOURCE_COMPONENT_CONFIGS[type]
    const [start, setStart] = useState(0)
    const portalMount = useRef<HTMLDivElement>()
    const [isTooltipOpen, setIsTooltipOpen] = useState(false)
    const [selectedRelation, setSelectedRelation] = useState<SwapiInfos>()
    const [tooltipCoordinates, setTooltipCoordinates] = useState<
        TooltipCoordinates
    >()

    const showTooltip = (target: HTMLElement, item: SwapiInfos) => {
        setIsTooltipOpen(true)
        setSelectedRelation(item)

        const rect = target.getBoundingClientRect()
        setTooltipCoordinates({
            left: rect.x,
            bottom: window.innerHeight - (rect.y + window.scrollY - 15)
        })
    }

    return (
        <>
            <div style={{ display: 'flex' }}>
                <Button
                    onClick={(_) => setStart(start - itemsPerRow)}
                    disabled={start === 0}
                >
                    <MaterialIcon icon="chevron_left" />
                </Button>

                <RelationsListCarousel
                    showTooltip={showTooltip}
                    setIsTooltipOpen={setIsTooltipOpen}
                    relations={relations}
                    type={type}
                    itemsPerRow={itemsPerRow}
                    start={start}
                />

                <Button
                    onClick={(_) => setStart(start + itemsPerRow)}
                    disabled={start + itemsPerRow >= relations.length}
                >
                    <MaterialIcon icon="chevron_right" />
                </Button>
            </div>

            <div
                ref={portalMount as React.MutableRefObject<HTMLDivElement>}
                id="portal-root"
            ></div>

            {isTooltipOpen && (
                <Portal mount={portalMount.current}>
                    <Tooltip coords={tooltipCoordinates as TooltipCoordinates}>
                        {getItemComponent(selectedRelation as SwapiInfos, true)}
                    </Tooltip>
                </Portal>
            )}
        </>
    )
}
