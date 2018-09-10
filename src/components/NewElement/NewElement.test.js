import React from 'react'
import { shallow } from 'enzyme'
import { NewElement } from './NewElement'

describe('NewElement', () => {
    it('Enter name', () => {
        const shallowWrapper = shallow(<NewElement />)

        shallowWrapper.find('#name').simulate('change', { target: { value: 'MyName', id: 'name' }})
        expect(shallowWrapper.state().name).toEqual('MyName')
    });
})