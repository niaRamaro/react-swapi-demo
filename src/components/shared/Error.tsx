import React from 'react'

import MaterialIcon from './MaterialIcon'

type Props = {
    message?: string
    size?: number
}

export default function Error({
    message = 'Sorry, an error occured',
    size = 1
}: Props) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                color: 'red',
                fontSize: `${size}em`
            }}
        >
            <MaterialIcon icon="warning" />
            <span>{message}</span>
        </div>
    )
}
