import React from 'react'

import FullFilmInfos from './infos/FullFilmInfos'
import { FullFilm } from '../../types/film'

type Props = {
    film: FullFilm
}

export default function FilmDetail({ film }: Props) {
    return <FullFilmInfos film={film} />
}
