import * as config from '../config.json'

const BASE_URL = config.api_url

export async function searchAPI(
    params: { [key: string]: string },
    signal: AbortSignal
) {
    const queryString = new URLSearchParams(params).toString()

    const response = await fetch(`${BASE_URL}?${queryString}`, { signal })

    return {
        status: response.status,
        body: await response.json()
    }
}
