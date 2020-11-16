import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import Loader from './shared/Loader'
import SearchResultList from './SearchResultList'
import Section from './shared/Section'
import styles from './SearchResults.module.scss'
import { searchAPI } from '../service/api'

type Props = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    type: string
    keyword: string
}

export default function SearchResults({ type, keyword, className }: Props) {
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

    const showContent = () => {
        if (isLoading) {
            return <Loader />
        }

        if (hasError) {
            return <p>Error</p>
        }

        return Object.keys(results).map(
            (ressourceType) =>
                results[ressourceType] && (
                    <Section
                        title={ressourceType.toUpperCase()}
                        key={ressourceType}
                        className={styles.section}
                    >
                        <SearchResultList
                            type={ressourceType}
                            results={results[ressourceType]}
                        />
                    </Section>
                )
        )
    }

    return <div className={className}>{showContent()}</div>
}
