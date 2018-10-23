import React from 'react';
import Register from './Register';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    const result = TestUtils.isElement(<BrowserRouter><Register /></BrowserRouter>)
    expect(result).toBe(true);
});