import React from 'react'

type Props = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
> & { icon: string }

export default function MaterialIcon({ icon, className }: Props) {
    return <span className={`material-icons ${className}`}>{icon}</span>
}
