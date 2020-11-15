import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import Loader from './Loader'
import SearchResultSection from './SearchResultSection'
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
    const history = useHistory()
    const location = useLocation()

    const fetchResults = async () => {
        setIsLoading(true)

        if (pendingRequest) {
            pendingRequest.abort()
        }

        const controller = new AbortController()
        setPendingRequest(controller)

        try {
            const { body, status } = await searchAPI(
                { type, keyword },
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

    const setQueryParams = () =>
        history.push({
            pathname: location.pathname,
            search: new URLSearchParams({ type, keyword }).toString()
        })

    useEffect(() => {
        setQueryParams()
        fetchResults()
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
                            type={ressourceType}
                            title={ressourceType.toUpperCase()}
                            results={results[ressourceType]}
                            key={ressourceType}
                        />
                    )
            )}
        </>
    )
}
