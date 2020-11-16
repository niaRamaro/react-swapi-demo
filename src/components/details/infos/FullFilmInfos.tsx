import React from 'react'

import Info from '../../shared/Info'
import ShortFilmInfos from './ShortFilmInfos'
import { FilmInfos } from '../../../types/film'

type Props = {
    film: FilmInfos
}

export default function FullFilmInfos({ film }: Props) {
    return (
        <>
            <ShortFilmInfos film={film} />
            <Info icon="face" label="Director" value={film.director} />
            <Info icon="face" label="Producer" value={film.producer} />
            <Info
                icon="article"
                label="Opening Crawl"
                value={film.opening_crawl}
            />
        </>
    )
}
