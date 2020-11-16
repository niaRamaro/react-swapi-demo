import React from 'react'

import MaterialIcon from './MaterialIcon'
import styles from './Info.module.scss'

type Props = {
    icon: string
    label: string
    value: string
}

export default function Info({ icon, label, value }: Props) {
    return (
        <div className={[styles.vCentered, styles.info].join(' ')}>
            <span className={[styles.vCentered, styles.label].join(' ')}>
                <MaterialIcon icon={icon} className={styles.icon} />
                <span>{label} : </span>
            </span>
            <span>{value}</span>
        </div>
    )
}
