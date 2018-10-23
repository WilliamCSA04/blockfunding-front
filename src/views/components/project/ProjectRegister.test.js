import React from 'react';
import ProjectRegister from './ProjectRegister';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    TestUtils.isElement(<BrowserRouter><ProjectRegister /></BrowserRouter>)
});
