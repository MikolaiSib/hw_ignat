import {UserType} from "../HW8";

type ActionType = { type: 'sort', payload: 'up' } | { type: 'check', payload: 18 } | { type: 'sort', payload: 'down' }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case 'up': {
                    return [...state.sort((a, b) => a.name <= b.name ? -1 : 1)]
                }
                case 'down': {
                    return [...state.sort((a, b) => a.name <= b.name ? 1 : -1)]
                }
                default:
                    return state
            }
        }
        case 'check': {
            return state.filter(e => e.age >= action.payload)
        }
        default:
            return state
    }
}