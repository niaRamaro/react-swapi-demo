import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import InfiniteScroll from 'react-infinite-scroller'
import Loader from './shared/Loader'
import styles from './RessourceList.module.scss'
import { RESSOURCES } from '../constants/search'
import { SearchResult } from '../types/search'

type Props = {
    type: RESSOURCES
    results: SearchResult
    onLoadMore: (type: RESSOURCES, page: number) => void
}

export default function RessourceList({ type, results, onLoadMore }: Props) {
    const { search } = useLocation()

    return (
        <InfiniteScroll
            loadMore={() => onLoadMore(type, results.next)}
            hasMore={!!results.next}
            loader={<Loader key={type} />}
            useWindow={false}
        >
            {results.results.map((result: any, index: number) => (
                <div key={index} className={styles.listItem}>
                    <Link
                        to={{
                            pathname: `/${type}/${result.id}`,
                            search
                        }}
                    >
                        <div>{result.name}</div>
                    </Link>
                </div>
            ))}
        </InfiniteScroll>
    )
}
