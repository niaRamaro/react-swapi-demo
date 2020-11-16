import React from 'react'

import Info from '../../shared/Info'
import { FilmInfos } from '../../../types/film'

type Props = {
    film: FilmInfos
}

export default function ShortFilmInfos({ film }: Props) {
    return (
        <>
            <Info icon="movie" label="Title" value={film.title} />
            <Info
                icon="format_list_numbered"
                label="Episode"
                value={`${film.episode_id}`}
            />
            <Info icon="today" label="Release Date" value={film.release_date} />
        </>
    )
}
