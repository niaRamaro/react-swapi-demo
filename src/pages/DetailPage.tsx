import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import Button from '../components/shared/Button'
import CenteredLoader from '../components/shared/CenteredLoader'
import Error from '../components/shared/Error'
import FilmDetail from '../components/details/FilmDetail'
import MaterialIcon from '../components/shared/MaterialIcon'
import PersonDetail from '../components/details/PersonDetail'
import PlanetDetail from '../components/details/PlanetDetail'
import SpeciesDetail from '../components/details/SpeciesDetail'
import StarshipDetail from '../components/details/StarshipDetail'
import VehicleDetail from '../components/details/VehicleDetail'
import styles from './DetailPage.module.scss'
import { FullFilm } from '../types/film'
import { FullPerson } from '../types/person'
import { FullPlanet } from '../types/planet'
import { FullSpecies } from '../types/species'
import { FullStarship } from '../types/starship'
import { FullVehicle } from '../types/vehicle'
import { RESSOURCES } from '../constants/search'
import { SwapiDetail } from '../types/search'
import { getDetailAPI } from '../service/api'

const detailMap = {
    [RESSOURCES.FILMS]: (film: SwapiDetail) => (
        <FilmDetail film={film as FullFilm} />
    ),
    [RESSOURCES.PEOPLE]: (person: SwapiDetail) => (
        <PersonDetail person={person as FullPerson} />
    ),
    [RESSOURCES.PLANETS]: (planet: SwapiDetail) => (
        <PlanetDetail planet={planet as FullPlanet} />
    ),
    [RESSOURCES.SPECIES]: (species: SwapiDetail) => (
        <SpeciesDetail species={species as FullSpecies} />
    ),
    [RESSOURCES.STARSHIPS]: (starship: SwapiDetail) => (
        <StarshipDetail starship={starship as FullStarship} />
    ),
    [RESSOURCES.VEHICLES]: (vehicle: SwapiDetail) => (
        <VehicleDetail vehicle={vehicle as FullVehicle} />
    )
}

export default function DetailPage() {
    const { type, id } = useParams<{ id: string; type: string }>()
    const { search } = useLocation()
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<SwapiDetail>()
    const [error, setError] = useState(false)

    useEffect(() => {
        const getDetail = async () => {
            try {
                const { body, status } = await getDetailAPI(
                    type as RESSOURCES,
                    +id
                )

                document.title = `${type.toUpperCase()} - ${
                    body?.name || body?.title
                }`
                setData(body)
                setError(status !== 200)
                setLoading(false)
            } catch (e) {
                setError(true)
                setLoading(false)
            }
        }

        getDetail()
    }, [type, id])

    useEffect(() => {
        const unlisten = history.listen(() => setLoading(true))

        return () => unlisten()
    }, [])

    const showContent = () => {
        if (loading) {
            return <CenteredLoader />
        } else {
            if (error) {
                return <Error />
            } else if (data) {
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {detailMap[type as RESSOURCES](data)}
                    </motion.div>
                )
            }
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.buttonContainer}>
                <Link to={{ pathname: '/', search }}>
                    <Button className={styles.button}>
                        <MaterialIcon icon="keyboard_backspace" />
                        <span>Back to search</span>
                    </Button>
                </Link>
            </div>

            <div className={styles.detail}>{showContent()}</div>
        </div>
    )
}
