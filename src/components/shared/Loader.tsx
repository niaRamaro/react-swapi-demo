import React from 'react'

import styles from './Loader.module.scss'

export default function Loader(
    props: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
) {
    return (
        <div className={styles.loader} {...props}>
            <aside className={[styles.loaderbox, styles.loaderleft].join(' ')}>
                <span className={styles.loadercircle}></span>
            </aside>
            <aside className={[styles.loaderbox, styles.loaderright].join(' ')}>
                <span className={styles.loadercircle}></span>
            </aside>
        </div>
    )
}
