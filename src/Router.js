import { browserHistory, Route, Router } from 'react-router';
import { BrowserRouter as Switch, withRouter } from 'react-router-dom';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

import App from "./App"

export default render(
  <ActionCableProvider url={`${sessionStorage.env}/cable`}>
    <Provider store={store}>
      <Router history={history}>
        <Route patch="/" component={App}>
        </Route>
      </Router>
    </Provider>
  </ActionCableProvider>,
  document.getElementById('app')
);