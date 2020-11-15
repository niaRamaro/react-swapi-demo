import React, { useEffect, useState } from 'react'

import SearchResults from '../components/SearchResults'
import Searchbar from '../components/Searchbar'
import useQueryParams from '../hooks/useQueryParams'
import { RESSOURCES } from '../constants/search'
import { SearchQuery } from '../types/search'
import { useThrottle } from 'ahooks'

export default function Homepage() {
    const queryParams = useQueryParams(['type', 'keyword'])
    const [type, setType] = useState(getType(queryParams.type as RESSOURCES))
    const [keyword, setKeyword] = useState(queryParams.keyword)
    const throttledKeyword = useThrottle(keyword, { wait: 500 })
    const [showResults, setShowResults] = useState(false)

    const onSearchChange = ({ type, keyword }: SearchQuery) => {
        setKeyword(keyword)
        setType(type)
        setShowResults(true)
    }

    function getType(type: RESSOURCES): string {
        return Object.values(RESSOURCES).includes(type) ? type : ''
    }

    useEffect(() => {
        if (keyword || type) {
            setShowResults(true)
        }
    }, [])

    return (
        <>
            <Searchbar
                initialValue={{ keyword, type }}
                onChange={onSearchChange}
            />
            {showResults && (
                <SearchResults type={type} keyword={throttledKeyword} />
            )}
        </>
    )
}
