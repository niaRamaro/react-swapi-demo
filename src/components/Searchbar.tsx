import React from 'react'
import { useForm } from 'react-hook-form'

import { RESSOURCES } from '../constants/search'
import { SearchQuery } from '../types/search'

import styles from './Searchbar.module.scss'

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
        <form
            className={[className, styles.form].join(' ')}
            onSubmit={handleSubmit(onChange)}
        >
            <div
                className={[styles.commonContainer, styles.inputContainer].join(
                    ''
                )}
            >
                <input
                    className={styles.input}
                    type="text"
                    name="keyword"
                    placeholder="Enter your search here"
                    ref={register}
                    onKeyUp={(_) => onChange(getValues())}
                />
            </div>

            <div
                className={[
                    styles.commonContainer,
                    styles.selectContainer
                ].join(' ')}
            >
                <select
                    className={styles.select}
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
            </div>
        </form>
    )
}
