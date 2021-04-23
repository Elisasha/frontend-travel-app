const initialState = {
};

export function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'setCurrentUser':
            return {
                ...state, ...action.payload
            };
        case 'logoutUser':
            return initialState;
        case 'extendCurrentUser':
            return {
                ...action.payload, ...state
            }
        default:
            return state;
    }
}
