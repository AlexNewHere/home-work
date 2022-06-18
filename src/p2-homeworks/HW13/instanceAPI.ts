import axios from 'axios'


export const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com`,
   })

type BodyType = {
    success: boolean
}
export type GetApiType = {
    errorText: string
    info: string
    yourBody:BodyType
    yourQuery: any
}

export const getApi = (checked: boolean) => {
    return (
        instance.post<GetApiType>(`/auth/test`, { "success": checked} )
    )
}