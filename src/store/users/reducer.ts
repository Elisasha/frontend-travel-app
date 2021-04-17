const initialState = {
};

export function usersReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'setUser':
            return {
                ...state, ...action.payload
            };
        default:
            return state;
    }
}
