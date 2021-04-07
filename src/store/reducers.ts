const initialState = {
    user: null,
};

export function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'setCurrentUser':
            return {
                ...state, user: action.payload
            };
        case 'logoutUser':
            return {
                ...state, user: null
            }
        default:
            return state;
    }
}
