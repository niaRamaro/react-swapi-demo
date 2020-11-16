import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

type Props = {
    mount?: HTMLElement
    children: ReactNode
}

export default function Portal({
    children,
    mount = document.getElementById('portal-root') as HTMLElement
}: Props) {
    const el = document.createElement('div')

    useEffect(() => {
        if (mount) {
            mount.appendChild(el)

            return () => {
                mount.removeChild(el)
            }
        }
    }, [el, mount])

    return createPortal(children, el)
}
