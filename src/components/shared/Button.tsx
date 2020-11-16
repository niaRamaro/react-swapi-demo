import React from 'react'

import styles from './Button.module.scss'

type Props = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export default function Button({ children, className, ...rest }: Props) {
    return (
        <button className={[className, styles.button].join(' ')} {...rest}>
            {children}
        </button>
    )
}
