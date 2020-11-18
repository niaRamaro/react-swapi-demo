import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import Button from '../components/shared/Button'
import CenteredLoader from '../components/shared/CenteredLoader'
import Error from '../components/shared/Error'
import MaterialIcon from '../components/shared/MaterialIcon'
import { RESSOURCES } from '../constants/search'
import { RESSOURCE_DETAIL_CONFIGS } from '../constants/config'
import { SwapiDetail } from '../types/search'
import { getDetailAPI } from '../service/api'

import styles from './DetailPage.module.scss'

export default function DetailPage() {
    const { type, id } = useParams<{ id: string; type: string }>()
    const { search } = useLocation()
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<SwapiDetail>()
    const [error, setError] = useState(false)

    useEffect(() => {
        const getDetail = async () => {
            try {
                const { body, status } = await getDetailAPI(
                    type as RESSOURCES,
                    +id
                )

                document.title = `${type.toUpperCase()} - ${
                    body?.name || body?.title
                }`
                setData(body)
                setError(status !== 200)
                setLoading(false)
            } catch (e) {
                setError(true)
                setLoading(false)
            }
        }

        getDetail()
    }, [type, id])

    useEffect(() => {
        const unlisten = history.listen(() => setLoading(true))

        return () => unlisten()
    }, [])

    const showContent = () => {
        if (loading) {
            return <CenteredLoader />
        } else {
            if (error) {
                return <Error />
            } else if (data) {
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {RESSOURCE_DETAIL_CONFIGS[type as RESSOURCES](data)}
                    </motion.div>
                )
            }
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.buttonContainer}>
                <Link to={{ pathname: '/', search }}>
                    <Button className={styles.button}>
                        <MaterialIcon icon="keyboard_backspace" />
                        <span>Back to search</span>
                    </Button>
                </Link>
            </div>

            <div className={styles.detail}>{showContent()}</div>
        </div>
    )
}
