import React from 'react'
import LoginScreen from '../../LoginScreen'

import renderer from 'react-test-renderer';

describe('LoginScreen', () => {
    it('renders', () => {
        const tree = renderer.create(
            <LoginScreen />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})