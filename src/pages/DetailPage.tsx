import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

import FilmDetail from '../components/details/FilmDetail'
import Loader from '../components/Loader'
import PersonDetail from '../components/details/PersonDetail'
import PlanetDetail from '../components/details/PlanetDetail'
import SpeciesDetail from '../components/details/SpeciesDetail'
import StarshipDetail from '../components/details/StarshipDetail'
import VehicleDetail from '../components/details/VehicleDetail'
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
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<SwapiDetail>()
    const [error, setError] = useState(false)

    const getDetail = async () => {
        try {
            const { body, status } = await getDetailAPI(type as RESSOURCES, +id)

            setData(body)
            setError(status !== 200)
            setLoading(false)
        } catch (e) {
            setError(true)
            setLoading(false)
        }
    }

    useEffect(() => {
        getDetail()
    }, [])

    const showContent = () => {
        if (loading) {
            return <Loader />
        } else {
            if (error) {
                return <h1>Error</h1>
            } else if (data) {
                return detailMap[type as RESSOURCES](data)
            }
        }
    }
    return (
        <>
            <Link to={{ pathname: '/', search }}>
                <button>Back</button>
            </Link>

            {showContent()}
        </>
    )
}