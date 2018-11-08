import React from 'react';
import ProjectsList from './ProjectsList';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    const result = TestUtils.isElement(<BrowserRouter><ProjectsList /></BrowserRouter>)
    expect(result).toBe(true);
});
