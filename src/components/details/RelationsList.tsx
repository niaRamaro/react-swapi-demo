import React, { useState, useRef, CSSProperties, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Carousel from '../shared/Carousel'
import Portal from '../shared/Portal'
import RelationListItem from './RelationListIem'
import Tooltip, { TooltipCoordinates } from '../shared/Tooltip'
import { RELATION_ITEM_PER_ROW, RESSOURCES } from '../../constants/search'
import { RESSOURCE_COMPONENT_CONFIGS } from '../../constants/config'
import { SwapiInfos } from '../../types/search'

type Props = {
    type: RESSOURCES
    relations: SwapiInfos[]
}

const itemMargin = 1

export default function RelationsList({ type, relations }: Props) {
    const [itemStyle, setItemStyle] = useState<CSSProperties>({})
    const renderRelation = RESSOURCE_COMPONENT_CONFIGS[type]

    const { search } = useLocation()
    const itemsPerRow = RELATION_ITEM_PER_ROW[type]
    const [selectedRelation, setSelectedRelation] = useState<SwapiInfos>()

    const [isTooltipOpen, setIsTooltipOpen] = useState(false)
    const [tooltipCoordinates, setTooltipCoordinates] = useState<
        TooltipCoordinates
    >()
    const portalMount = useRef<HTMLDivElement>()

    const showTooltip = (hoveredButton: HTMLElement, relation: SwapiInfos) => {
        setIsTooltipOpen(true)
        setSelectedRelation(relation)

        const rect = hoveredButton.getBoundingClientRect()
        setTooltipCoordinates({
            left: rect.x,
            bottom: window.innerHeight - (rect.y + window.scrollY - 15)
        })
    }

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
        <>
            <div style={{ display: 'flex' }}>
                <Carousel
                    items={relations}
                    itemsPerRow={itemsPerRow}
                    render={(displayedRelations: SwapiInfos[]) => (
                        <>
                            {displayedRelations.map((relation, index) => (
                                <RelationListItem
                                    itemStyle={itemStyle}
                                    relation={relation}
                                    search={search}
                                    hideTooltip={() => setIsTooltipOpen(false)}
                                    showTooltip={showTooltip}
                                    renderRelation={renderRelation}
                                    type={type}
                                    key={index}
                                />
                            ))}
                        </>
                    )}
                />
            </div>

            <div
                ref={portalMount as React.MutableRefObject<HTMLDivElement>}
                id="portal-root"
            ></div>

            {isTooltipOpen && (
                <Portal mount={portalMount.current}>
                    <Tooltip coords={tooltipCoordinates as TooltipCoordinates}>
                        {renderRelation(selectedRelation as SwapiInfos, true)}
                    </Tooltip>
                </Portal>
            )}
        </>
    )
}
