import React, { ReactNode } from 'react'

import styles from './Section.module.scss'

type Props = {
    title: string
    children: ReactNode
    className?: string
}

export default function Section({ title, children, className = '' }: Props) {
    return (
        <div className={[styles.section, className].join(' ')}>
            <h4 className={styles.sectionTitle}>{title}</h4>

            <div className={styles.sectionContent}>{children}</div>
        </div>
    )
}