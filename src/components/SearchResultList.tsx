import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import styles from './SearchResultList.module.scss'

type Props = {
    type: string
    results: any
}

export default function SearchResultList({ type, results }: Props) {
    const { search } = useLocation()

    return (
        <>
            {results.results.map((result: any) => (
                <div key={result.id} className={styles.listItem}>
                    <Link to={{ pathname: `/${type}/${result.id}`, search }}>
                        <div>{result.name}</div>
                    </Link>
                </div>
            ))}
        </>
    )
}
