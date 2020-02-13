
export interface Action {
	type: string;
}

export interface ApplicationState {
	initialState: object
}

const initialState: ApplicationState = {
	initialState: {}
}

export const reducer = (state: ApplicationState = initialState, action: Action) => {

	switch(action.type) {

		default:
			return state;
	}
};
