import React from 'react'

import styles from './Card.module.scss'

type Props = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

export default function Card({ children }: Props) {
    return <div className={styles.card}>{children}</div>
}
