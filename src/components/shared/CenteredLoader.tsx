import React from 'react'

import Loader from './Loader'

export default function CenteredLoader() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                flex: 1
            }}
        >
            <Loader />
        </div>
    )
}
