import React from 'react'
import { shallow } from 'enzyme'
import { Table } from './Table'

describe('Table', () => {
    const props = {
        data: [ {name: 'иван'}, {name: 'тимофей'}, {name: 'артем'}, {name: 'семен'} ]
    }
    const shallowWrapper = shallow(<Table {...props} />)

    it('Sort data', () => {
        shallowWrapper.find('.table__td-sort').simulate('click')
        expect(shallowWrapper.state().sort).toEqual('DESC')
    })

    it('Search', () => {      
        shallowWrapper.find('#search').simulate('change', { target: { value: 'query' }})
        expect(shallowWrapper.state().search).toEqual('query')
    })
})