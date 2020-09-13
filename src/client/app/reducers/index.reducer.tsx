export interface Action {
  type: string;
}

export interface ApplicationState {
  initialState: Record<string, unknown>;
}

const initialState: ApplicationState = {
  initialState: {},
};

export const reducer = (state: ApplicationState = initialState, action: Action): ApplicationState => {
  switch (action.type) {
    default:
      return state;
  }
};
