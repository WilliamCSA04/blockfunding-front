import React from 'react';
import ProjectDetail from './ProjectDetail';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    TestUtils.isElement(<BrowserRouter><ProjectDetail /></BrowserRouter>)
});
