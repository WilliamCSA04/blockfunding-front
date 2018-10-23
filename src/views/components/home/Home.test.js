import React from 'react';
import Home from './Home';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    TestUtils.isElement(<BrowserRouter><Home /></BrowserRouter>)
});
