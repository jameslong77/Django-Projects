import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducer';
import DevTools from './devtools';
import { persistState } from 'redux-devtools';

const loggerMiddleware = createLogger();

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

const finalCreateStore = compose(
  // Middleware you want to use in development:
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducer', () =>
      store.replaceReducer(require('./reducer'))
    );
  }

  return store;
}
