import React, { useEffect, useState } from 'react'

import Loader from './Loader'
import SearchResultSection from './SearchResultSection'
import { SearchQuery } from '../types/search'
import { searchAPI } from '../service/api'

type Props = {
    type: string
    keyword: string
}

export default function SearchResults({ type, keyword }: Props) {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [results, setResults] = useState(null as any)
    const [
        pendingRequest,
        setPendingRequest
    ] = useState<AbortController | null>()

    const fetchResults = async (searchQuery: SearchQuery) => {
        setIsLoading(true)

        if (pendingRequest) {
            pendingRequest.abort()
        }

        const controller = new AbortController()
        setPendingRequest(controller)

        try {
            const { body, status } = await searchAPI(
                searchQuery,
                controller.signal
            )
            setPendingRequest(null)
            setResults(body)
            setHasError(status !== 200)
            setIsLoading(false)
        } catch (e) {
            setPendingRequest(null)
            if (e.name !== 'AbortError') {
                setHasError(true)
                setIsLoading(false)
            }
        }
    }

    useEffect(() => {
        fetchResults({ type, keyword })
    }, [keyword, type])

    if (isLoading) {
        return <Loader />
    }

    if (hasError) {
        return <p>Error</p>
    }

    return (
        <>
            {Object.keys(results).map(
                (ressourceType) =>
                    results[ressourceType] && (
                        <SearchResultSection
                            title={ressourceType}
                            results={results[ressourceType]}
                            key={ressourceType}
                        />
                    )
            )}
        </>
    )
}
