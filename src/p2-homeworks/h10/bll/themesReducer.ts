export type ItialStateType = {
    theme: string
    minAmount: number
    maxAmount: number
}

const initState: ItialStateType = {
    theme: 'some',
    minAmount: 0,
    maxAmount: 100
}

export const themesReducer = (state = initState, action: ColorType): ItialStateType => {
    switch (action.type) {
        case 'SET-THEMES': {
            return {...state, theme: action.payload}
        }
        case 'SET-CHANGE-COLORS': {

            return {...state,
                minAmount: action.payload.minAmount,
                maxAmount: action.payload.maxAmount}
        }
        default:
            return state
    }
}

export const themesAC = (color: string) => ({type: 'SET-THEMES', payload: color} as const)
export const changeColorsAC = (minAmount: number, maxAmount: number) => ({type: 'SET-CHANGE-COLORS', payload: {minAmount, maxAmount}} as const)


type ColorType = ReturnType<typeof themesAC> | ReturnType<typeof changeColorsAC>