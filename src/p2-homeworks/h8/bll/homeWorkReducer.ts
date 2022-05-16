import {UserType} from '../HW8';

type CheckType = 'up' | 'down'

type ActionType = {
    type: string
    payload: CheckType | number
}


export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.age - b.age);
            } else if (action.payload === 'down') {
                return [...state].sort((a, b) => b.age - a.age);
            } else {
                return state;
            }
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload);
        }
        default:
            return state
    }
}