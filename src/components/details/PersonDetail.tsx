import React from 'react'

import FullPersonInfos from './infos/FullPersonInfos'
import { FullPerson } from '../../types/person'

type Props = {
    person: FullPerson
}

export default function PersonDetail({ person }: Props) {
    return <FullPersonInfos person={person} />
}
