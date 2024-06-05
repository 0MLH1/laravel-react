// store/index.js

import { createStore, applyMiddleware, compose } from 'redux';
import throttle from 'lodash/throttle';
import reducers from '../reducers';
import { loadState, saveState } from '../utils/localStorage';

const middlewares = [];

const configureStore = (preloadedState) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers,
        preloadedState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    store.subscribe(throttle(() => {
        saveState({
            cart: store.getState().cart
        });
    }, 1000));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

const preloadedState = loadState();
const store = configureStore(preloadedState);

export default store;
