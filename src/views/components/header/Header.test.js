import React from 'react';
import Header from './Header';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    const result = TestUtils.isElement(<BrowserRouter><Header /></BrowserRouter>)
    expect(result).toBe(true);
});
