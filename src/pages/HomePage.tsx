import React, { useState } from 'react'
import { useThrottle } from 'ahooks'

import SearchResults from '../components/SearchResults'
import Searchbar from '../components/Searchbar'
import styles from './HomePage.module.scss'
import useQueryParams from '../hooks/useQueryParams'
import { RESSOURCES } from '../constants/search'
import { SearchQuery } from '../types/search'

export default function Homepage() {
    const queryParams = useQueryParams(['type', 'keyword'])
    const [type, setType] = useState(getType(queryParams.type as RESSOURCES))
    const [keyword, setKeyword] = useState(queryParams.keyword)
    const throttledKeyword = useThrottle(keyword, { wait: 500 })
    const [showResults, setShowResults] = useState(true)

    const onSearchChange = ({ type, keyword }: SearchQuery) => {
        setKeyword(keyword)
        setType(type)
        setShowResults(true)
    }

    function getType(type: RESSOURCES): string {
        return Object.values(RESSOURCES).includes(type) ? type : ''
    }

    return (
        <div className={styles.main}>
            <Searchbar
                className={styles.searchbar}
                initialValue={{ keyword, type }}
                onChange={onSearchChange}
            />
            {showResults && (
                <SearchResults
                    type={type}
                    keyword={throttledKeyword}
                    className={styles.results}
                />
            )}
        </div>
    )
}
