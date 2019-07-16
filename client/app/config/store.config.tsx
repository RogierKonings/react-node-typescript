import { createStore, Store, applyMiddleware } from 'redux';
import { reducer, IApplicationState } from '../reducers/index.reducer';
import { routerMiddleware } from 'react-router-redux';


export default function configureStore(
	initialState: IApplicationState
): Store<IApplicationState> {

	const store = createStore(
		reducer,
		initialState
	);



	if (module.hot) {
		// enable webpack hot module replacement for reducers
		module.hot.accept('../reducers/index.reducer', () => {
			// `default` is to extract the default entity from the export.
			const nextReducer = require('../reducers/index.reducer').default;
			store.replaceReducer(nextReducer);
		});
	}

	console.log(store);

	return store;

}
