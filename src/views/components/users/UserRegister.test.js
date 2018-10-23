import React from 'react';
import UserRegister from './UserRegister';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    const result = TestUtils.isElement(<BrowserRouter><UserRegister /></BrowserRouter>)
    expect(result).toBe(true);
});
