import { RESSOURCES } from '../constants/search'

const BASE_URL = process.env.REACT_APP_URL_API || 'http://localhost:3001'

export type APIResponse<T> = {
    status: number
    body: T
}

export async function searchAPI(
    params: { [key: string]: string },
    signal?: AbortSignal
): Promise<APIResponse<any>> {
    const queryString = new URLSearchParams(params).toString()

    return formatFetchResponse(
        await fetch(`${BASE_URL}?${queryString}`, { signal })
    )
}

export async function getDetailAPI(
    type: RESSOURCES,
    id: number
): Promise<APIResponse<any>> {
    return formatFetchResponse(await fetch(`${BASE_URL}/${type}/${id}`))
}

async function formatFetchResponse(response: Response) {
    return {
        status: response.status,
        body: await response.json()
    }
}
