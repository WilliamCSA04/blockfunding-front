import React from 'react';
import Register from './Register';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    TestUtils.isElement(<BrowserRouter><Register /></BrowserRouter>)
});
