import React from 'react';
import ProjectRegister from './ProjectRegister';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    const result = TestUtils.isElement(<BrowserRouter><ProjectRegister /></BrowserRouter>)
    expect(result).toBe(true);
});
