import data from './data'

describe('Reducers', () => {
    it('GET_DATA', () => {
        const state = []
        const action = {
            type: 'GET_DATA',
            data: [{
                name: 'name',
                city: 'city',
                country: 'country',
                organization: 'org',
                description: 'desc'
            }]
        }

        expect(data(state, action)).toEqual(action.data)
    })

    it('ADD_DATA', () => {
        const state = []
        const action = {
            type: 'ADD_DATA',
            data: {
                name: 'name',
                city: 'city',
                country: 'country',
                organization: 'org',
                description: 'desc'
            }
        }

        expect(data(state, action)).toEqual([...state, action.data])
    })
})