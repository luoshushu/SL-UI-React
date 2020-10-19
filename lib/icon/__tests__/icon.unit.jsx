import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'

describe('Icon', () => {
    it('是个 svg', () => {
        const json = renderer.create(<Icon/>).toJSON()
        expect(json).toMatchSnapshot()
    })
})