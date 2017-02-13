import {createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import reducer from '../reducers';

// export default function configureStore(initialState) {
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(reduxImmutableStateInvariant(), thunk)
//   );
// }

export default function configureStore(initialState) {
    const finalCreateStore = compose(
      applyMiddleware(reduxImmutableStateInvariant(), thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(reducer, initialState);

    return store;
}
