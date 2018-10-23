import React from 'react';
import Projects from './Projects';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    const result = TestUtils.isElement(<BrowserRouter><Projects /></BrowserRouter>)
    expect(result).toBe(true);
});
