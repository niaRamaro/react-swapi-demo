import React, { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import Button from '../shared/Button'
import Card from '../shared/Card'
import { RESSOURCES } from '../../constants/search'
import { SwapiInfos } from '../../types/search'

import styles from './RelationListIem.module.scss'

type Props = {
    itemStyle: CSSProperties
    relation: SwapiInfos
    search: string
    type: RESSOURCES
    hideTooltip: () => void
    renderRelation: (relation: SwapiInfos) => ReactNode
    showTooltip: (hoveredButton: HTMLElement, relation: SwapiInfos) => void
}

export default function RelationListItem({
    itemStyle,
    relation,
    search,
    type,
    hideTooltip,
    renderRelation,
    showTooltip
}: Props) {
    return (
        <>
            <Card style={itemStyle}>
                {renderRelation(relation)}

                <div className={styles.buttonContainer}>
                    <Button
                        className={styles.button}
                        onMouseOver={({ target }) =>
                            showTooltip(target as HTMLElement, relation)
                        }
                        onMouseOut={hideTooltip}
                    >
                        Show More
                    </Button>

                    <Link
                        to={{
                            pathname: `/${type}/${relation.id}`,
                            search
                        }}
                    >
                        <Button className={styles.button}>
                            Go to full detail
                        </Button>
                    </Link>
                </div>
            </Card>
        </>
    )
}
