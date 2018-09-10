const GET_DATA = data => {
    return {
        type: 'GET_DATA',
        data: data
    }
}

const ADD_DATA = data => {
    return {
        type: 'ADD_DATA',
        data: data
    }
}

export { GET_DATA, ADD_DATA }