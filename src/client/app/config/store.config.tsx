import { createStore, Store } from 'redux';
import { reducer, ApplicationState } from '../reducers/index.reducer';

export default function configureStore(initialState: ApplicationState): Store<ApplicationState> {
  const store = createStore(reducer, initialState);

  if (module.hot) {
    // enable webpack hot module replacement for reducers
    module.hot.accept('../reducers/index.reducer', () => {
      // `default` is to extract the default entity from the export.
      const nextReducer = reducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
