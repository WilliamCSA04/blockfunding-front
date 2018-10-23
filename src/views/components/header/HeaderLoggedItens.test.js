import React from 'react';
import HeaderLoggedItens from './HeaderLoggedItens';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    TestUtils.isElement(<BrowserRouter><HeaderLoggedItens /></BrowserRouter>)
});
