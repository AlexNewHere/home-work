type ItialStateType = {
    loading: boolean
}

const initState = {
loading: false
}

export const loadingReducer = (state = initState, action: LoadingType): ItialStateType => {
    switch (action.type) {
        case 'ON-LOADING': {
            return {...state, loading: true}
        }
        case 'OFF-LOADING': {
            return {...state, loading: false}
        }
        default:
            return state
    }
}

export const loadingAC = () =>( {type: 'ON-LOADING'} as const)
export const offLoadingAC = () => ({type: 'OFF-LOADING'} as const)

type LoadingType =  ReturnType<typeof loadingAC> | ReturnType<typeof offLoadingAC>