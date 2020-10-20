import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import { mount } from "enzyme";

describe('Icon', () => {
    it('是个 svg', () => { 
        const json = renderer.create(<Icon name="alipay"/>).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('onClick点击事件', () => {

        const fn = jest.fn()
        const c = mount(<Icon name="alipay" onClick={fn} />)
        c.find('svg').simulate('click') 
        expect(fn).toBeCalled() //期待fn被调用

    })
})