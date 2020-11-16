import React, { useState, useEffect, CSSProperties, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Button from '../shared/Button'
import Card from '../shared/Card'
import FullFilmInfos from './infos/FullFilmInfos'
import FullPersonInfos from './infos/FullPersonInfos'
import FullPlanetInfos from './infos/FullPlanetInfos'
import FullSpeciesInfos from './infos/FullSpeciesInfos'
import FullStarshipInfos from './infos/FullStarshipInfos'
import FullVehicleInfos from './infos/FullVehicleInfos'
import MaterialIcon from '../shared/MaterialIcon'
import Portal from '../shared/Portal'
import ShortFilmInfos from './infos/ShortFilmInfos'
import ShortPersonInfos from './infos/ShortPersonInfos'
import ShortPlanetInfos from './infos/ShortPlanetInfos'
import ShortSpeciesInfos from './infos/ShortSpeciesInfos'
import ShortStarshipInfos from './infos/ShortStarshipInfos'
import ShortVehicleInfos from './infos/ShortVehicleInfos'
import Tooltip, { TooltipCoordinates } from '../shared/Tooltip'
import styles from './RelationsList.module.scss'
import { FilmInfos } from '../../types/film'
import { PersonInfos } from '../../types/person'
import { PlanetInfos } from '../../types/planet'
import { RELATION_ITEM_PER_ROW, RESSOURCES } from '../../constants/search'
import { SpeciesInfos } from '../../types/species'
import { StarshipInfos } from '../../types/starship'
import { SwapiInfos } from '../../types/search'
import { VehicleInfos } from '../../types/vehicle'

type Props = {
    type: RESSOURCES
    relations: SwapiInfos[]
}

export const itemMap = {
    [RESSOURCES.FILMS]: (film: SwapiInfos, showFull = false) =>
        showFull ? (
            <FullFilmInfos film={film as FilmInfos} />
        ) : (
            <ShortFilmInfos film={film as FilmInfos} />
        ),
    [RESSOURCES.PEOPLE]: (person: SwapiInfos, showFull = false) =>
        showFull ? (
            <FullPersonInfos person={person as PersonInfos} />
        ) : (
            <ShortPersonInfos person={person as PersonInfos} />
        ),
    [RESSOURCES.PLANETS]: (planet: SwapiInfos, showFull = false) =>
        showFull ? (
            <FullPlanetInfos planet={planet as PlanetInfos} />
        ) : (
            <ShortPlanetInfos planet={planet as PlanetInfos} />
        ),
    [RESSOURCES.SPECIES]: (species: SwapiInfos, showFull = false) =>
        showFull ? (
            <FullSpeciesInfos species={species as SpeciesInfos} />
        ) : (
            <ShortSpeciesInfos species={species as SpeciesInfos} />
        ),
    [RESSOURCES.STARSHIPS]: (starship: SwapiInfos, showFull = false) =>
        showFull ? (
            <FullStarshipInfos starship={starship as StarshipInfos} />
        ) : (
            <ShortStarshipInfos starship={starship as StarshipInfos} />
        ),
    [RESSOURCES.VEHICLES]: (vehicle: SwapiInfos, showFull = false) =>
        showFull ? (
            <FullVehicleInfos vehicle={vehicle as VehicleInfos} />
        ) : (
            <ShortVehicleInfos vehicle={vehicle as VehicleInfos} />
        )
}

const itemMargin = 1

export default function RelationsList({ type, relations }: Props) {
    const { search } = useLocation()
    const itemsPerRow = RELATION_ITEM_PER_ROW[type]
    const getItemComponent = itemMap[type]
    const [start, setStart] = useState(0)
    const [displayedItems, setDisplayedItems] = useState<SwapiInfos[]>([])
    const [itemStyle, setItemStyle] = useState<CSSProperties>({})
    const [isTooltipOpen, setIsTooltipOpen] = useState(false)
    const [selectedRelation, setSelectedRelation] = useState<SwapiInfos>()
    const portalMount = useRef<HTMLDivElement>()
    const [coords, setCoords] = useState<TooltipCoordinates>()

    const showTooltip = (target: HTMLElement, item: SwapiInfos) => {
        setIsTooltipOpen(true)
        setSelectedRelation(item)

        const rect = target.getBoundingClientRect()
        setCoords({
            left: rect.x,
            bottom: window.innerHeight - (rect.y + window.scrollY - 15)
        })
    }

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
        <>
            <div className={styles.content}>
                <Button
                    onClick={(_) => setStart(start - itemsPerRow)}
                    disabled={start === 0}
                >
                    <MaterialIcon icon="chevron_left" />
                </Button>

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
                                        Go to detail
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>

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
                    <Tooltip coords={coords as TooltipCoordinates}>
                        {getItemComponent(selectedRelation as SwapiInfos, true)}
                    </Tooltip>
                </Portal>
            )}
        </>
    )
}
