import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import Loader from './shared/Loader'
import RessourceList from './RessourceList'
import Section from './shared/Section'
import styles from './SearchResults.module.scss'
import { RESSOURCES } from '../constants/search'
import { ResultTree, SearchResult } from '../types/search'
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
    const [results, setResults] = useState<ResultTree>({} as ResultTree)
    const [
        pendingRequest,
        setPendingRequest
    ] = useState<AbortController | null>()
    const history = useHistory()
    const location = useLocation()

    const loadNextPage = async (type: RESSOURCES, page: number) => {
        try {
            const { body, status } = await searchAPI({
                type,
                keyword,
                page: `${page}`
            })

            if (status === 200) {
                const ressourceResults = body[type]
                setResults((prevResults) => ({
                    ...prevResults,
                    [type]: {
                        ...prevResults[type],
                        next: ressourceResults.next,
                        results: [
                            ...(prevResults[type as RESSOURCES] as SearchResult)
                                .results,
                            ...ressourceResults.results
                        ]
                    }
                }))
            }
        } catch (e) {
            console.log('Load next page failed', type, page)
        }
    }

    useEffect(() => {
        const setQueryParams = () =>
            history.push({
                pathname: location.pathname,
                search: new URLSearchParams({ type, keyword }).toString()
            })

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

        return (
            <>
                {Object.keys(results).map(
                    (ressourceType) =>
                        results[ressourceType as RESSOURCES] && (
                            <Section
                                title={`${ressourceType.toUpperCase()} (${
                                    (results[
                                        ressourceType as RESSOURCES
                                    ] as SearchResult).count
                                })`}
                                key={ressourceType}
                                className={styles.section}
                            >
                                <RessourceList
                                    type={ressourceType as RESSOURCES}
                                    results={
                                        results[
                                            ressourceType as RESSOURCES
                                        ] as SearchResult
                                    }
                                    onLoadMore={loadNextPage}
                                />
                            </Section>
                        )
                )}
            </>
        )
    }

    return <div className={className}>{showContent()}</div>
}
