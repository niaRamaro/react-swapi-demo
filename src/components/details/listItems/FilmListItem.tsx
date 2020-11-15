import React from 'react'

import { FilmInfos } from '../../../types/film'

type Props = {
    film: FilmInfos
}

export default function FilmListItem({ film }: Props) {
    return (
        <ul>
            <li>
                <span>Title : </span>
                <span>{film.title}</span>
            </li>
            <li>
                <span>Episode : </span>
                <span>{film.episode_id}</span>
            </li>
            <li>
                <span>Release Date : </span>
                <span>{film.release_date}</span>
            </li>
        </ul>
    )
}
