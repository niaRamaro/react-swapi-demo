import React from 'react'

import { FilmInfos } from '../../../types/film'

type Props = {
    film: FilmInfos
}

export default function FullFilmInfos({ film }: Props) {
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
            <li>
                <span>Director : </span>
                <span>{film.director}</span>
            </li>
            <li>
                <span>Producer : </span>
                <span>{film.producer}</span>
            </li>
            <li>
                <span>Opening Crawl : </span>
                <span>{film.opening_crawl}</span>
            </li>
        </ul>
    )
}
