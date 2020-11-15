import { useLocation } from 'react-router-dom'

type ParamMap = { [key: string]: string }

export default function useQueryParams(keys: string[]): ParamMap {
    const location = useLocation()
    const params = new URLSearchParams(location.search)

    return keys.reduce((paramsMap, key) => {
        paramsMap[key] = params.get(key) || ''

        return paramsMap
    }, {} as ParamMap)
}
