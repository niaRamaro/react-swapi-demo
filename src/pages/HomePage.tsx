import React, { useState } from 'react'

import SearchResults from '../components/SearchResults'
import Searchbar from '../components/Searchbar'
import { SearchQuery } from '../types/search'
import { useThrottle } from 'ahooks'

export default function Homepage() {
    const [keyword, setKeyword] = useState('')
    const throttledKeyword = useThrottle(keyword, { wait: 500 })
    const [type, setType] = useState('')
    const [showResults, setShowResults] = useState(false)

    const onSearchChange = ({ type, keyword }: SearchQuery) => {
        setKeyword(keyword)
        setType(type)
        setShowResults(true)
    }

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
