const data = (state = [], action) => {
    switch (action.type) {
        case 'GET_DATA':
            return action.data
        case 'ADD_DATA':
            return [...state, action.data]
        default:
            return state
    }
}

export default data