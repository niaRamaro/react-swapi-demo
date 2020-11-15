import React from 'react'

type Props = {
    title: string
    results: any
}

export default function SearchResultSection({ title, results }: Props) {
    return (
        <div>
            <h3>
                {title.toUpperCase()} {results.count}
            </h3>

            <div>
                {results.results.map((result: any) => (
                    <div>{result.name}</div>
                ))}
            </div>
        </div>
    )
}
