import React from 'react';
import HeaderNotLoggedItens from './HeaderNotLoggedItens';
import TestUtils from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom'
it('is a react element', () => {
    TestUtils.isElement(<BrowserRouter><HeaderNotLoggedItens /></BrowserRouter>)
});
