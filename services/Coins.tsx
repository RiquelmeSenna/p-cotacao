import { baseUrl } from "../utils/urlApi"

export const getDolar = async () => {
    const url = `${baseUrl}USD-BRL`

    const response = await fetch(url)
    const json = await response.json()

    if (json) {
        return json
    }

    return false
}

export const getEuro = async () => {
    const url = `${baseUrl}EUR-BRL`

    const response = await fetch(url)
    const json = await response.json()

    if (json) {
        return json
    }

    return false
}

