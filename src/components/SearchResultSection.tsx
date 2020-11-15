import React from 'react'
import { Link, useLocation } from 'react-router-dom'

type Props = {
    type: string
    title: string
    results: any
}

export default function SearchResultSection({ type, title, results }: Props) {
    const { search } = useLocation()

    return (
        <div>
            <h3>
                {title} {results.count}
            </h3>

            <div>
                {results.results.map((result: any) => (
                    <Link
                        to={{ pathname: `/${type}/${result.id}`, search }}
                        key={result.id}
                    >
                        <div>{result.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
