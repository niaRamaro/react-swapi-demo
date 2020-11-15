import React, { ReactNode } from 'react'

type Props = {
    title: string
    children: ReactNode
}

export default function Section({ title, children }: Props) {
    return (
        <>
            <h4>{title}</h4>

            {children}
        </>
    )
}
