import React from 'react';
import ProjectDetail from './ProjectDetail';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    const result = TestUtils.isElement(<BrowserRouter><ProjectDetail /></BrowserRouter>)
    expect(result).toBe(true);
});
