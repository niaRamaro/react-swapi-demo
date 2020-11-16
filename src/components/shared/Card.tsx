import React from 'react'

import styles from './Card.module.scss'

type Props = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>

export default function Card({ children, className, ...rest }: Props) {
    return (
        <div className={[className, styles.card].join(' ')} {...rest}>
            {children}
        </div>
    )
}
