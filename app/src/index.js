import Home from 'components/home/Home';
import { Route, Switch } from 'react-router';
import configureStore from 'utils/store';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from 'utils/routes';
import Toast from 'modals/Toast/Toast';

const history = createBrowserHistory();
const initialState = {};
const store = configureStore(history, initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={routes.all} render={() => <Home />} />
      </Switch>
      <Toast />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
