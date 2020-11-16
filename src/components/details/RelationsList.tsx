import React, { useState, useEffect, CSSProperties } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Button from '../shared/Button'
import Card from '../shared/Card'
import MaterialIcon from '../shared/MaterialIcon'
import ShortFilmInfos from './infos/ShortFilmInfos'
import ShortPersonInfos from './infos/ShortPersonInfos'
import ShortPlanetInfos from './infos/ShortPlanetInfos'
import ShortSpeciesInfos from './infos/ShortSpeciesInfos'
import ShortStarshipInfos from './infos/ShortStarshipInfos'
import ShortVehicleInfos from './infos/ShortVehicleInfos'
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

const itemMap = {
    [RESSOURCES.FILMS]: (film: SwapiInfos) => (
        <ShortFilmInfos film={film as FilmInfos} />
    ),
    [RESSOURCES.PEOPLE]: (person: SwapiInfos) => (
        <ShortPersonInfos person={person as PersonInfos} />
    ),
    [RESSOURCES.PLANETS]: (planet: SwapiInfos) => (
        <ShortPlanetInfos planet={planet as PlanetInfos} />
    ),
    [RESSOURCES.SPECIES]: (species: SwapiInfos) => (
        <ShortSpeciesInfos species={species as SpeciesInfos} />
    ),
    [RESSOURCES.STARSHIPS]: (starship: SwapiInfos) => (
        <ShortStarshipInfos starship={starship as StarshipInfos} />
    ),
    [RESSOURCES.VEHICLES]: (vehicle: SwapiInfos) => (
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
    const getDisplayedItems = () => relations.slice(start, start + itemsPerRow)

    useEffect(() => {
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
                        <Link to={{ pathname: `/${type}/${item.id}`, search }}>
                            <Button className={styles.button}>
                                Go to detail
                            </Button>
                        </Link>
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
    )
}
