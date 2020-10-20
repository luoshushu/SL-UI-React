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
        let n = 1
        const fn = ()=>{
            n = 333
        }
        const c = mount(<Icon name="alipay" onClick={fn} />)
        c.find('svg').simulate('click') // 如果点击了那么n 就等于333
        expect(n).toEqual(333)

    })
})