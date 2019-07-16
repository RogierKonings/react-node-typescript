
export interface IAction {
	type: string;
}

export interface IApplicationState {

}

const initialState: IApplicationState = {

}

export const reducer = (state: IApplicationState = initialState, action: IAction) => {

	switch(action.type) {

		default:
			return state;
	}
};
