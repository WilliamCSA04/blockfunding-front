import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    TestUtils.isElement(<BrowserRouter><Login /></BrowserRouter>)
});
