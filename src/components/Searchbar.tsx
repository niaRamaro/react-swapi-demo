import React from 'react'
import { useForm } from 'react-hook-form'

import MaterialIcon from './MaterialIcon'
import { RESSOURCES } from '../constants/search'
import { SearchQuery } from '../types/search'

type Props = {
    initialValue: SearchQuery
    onChange: (searchQuery: SearchQuery) => void
    className: string
}

export default function Searchbar({
    initialValue,
    onChange,
    className
}: Props) {
    const types = [''].concat(Object.values(RESSOURCES))
    const { register, handleSubmit, getValues } = useForm({
        defaultValues: initialValue
    })

    return (
        <form className={className} onSubmit={handleSubmit(onChange)}>
            <input
                type="text"
                name="keyword"
                placeholder="Enter your search here"
                ref={register}
                onKeyUp={(_) => onChange(getValues())}
            />

            <select
                name="type"
                ref={register}
                onChange={(_) => onChange(getValues())}
            >
                {types.map((type) => (
                    <option value={type} key={type}>
                        {type.toUpperCase()}
                    </option>
                ))}
            </select>

            <button type="submit">
                <MaterialIcon icon="search" />
            </button>
        </form>
    )
}
