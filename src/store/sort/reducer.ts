const initialState = {type: "startDate", order : "DSC", filter: ""};
export function sortReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'setSortType':
            return {
                ...state, type: action.payload
            };
        case 'setSortOrder':
            return {
                ...state, order: action.payload
            };
        case 'setFilter':
            return {
                ...state, filter: action.payload
            };
        default:
            return state;
    }
}