import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    const result = TestUtils.isElement(<BrowserRouter><Footer /></BrowserRouter>)
    expect(result).toBe(true);
});
