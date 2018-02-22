import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { saga } from 'sagas'; 

import reducer from 'reducers';

const dev = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const logger = createLogger({
    duration:  true,
    collapsed: true,
    diff:      true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});

if (dev) {
    middleware.push(logger);
}

export default createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(saga);