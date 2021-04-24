const initialState = null;

export function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'setCurrentUser':
            return action.payload
        case 'logoutUser':
            return initialState;
        case 'extendCurrentUser':
            return {
                //@ts-ignore
                ...action.payload, ...state
            }
        default:
            return state;
    }
}
