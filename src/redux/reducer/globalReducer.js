import ActionType from "./globalActionType";

const globalState = {
	totalOrder: 0,
};

//Reducer
const rootReducer = (state = globalState, action) => {
	switch (action.type) {
		case ActionType.PLUS_ORDER:
			return {
				...state,
				totalOrder: state.totalOrder + 1,
			};
			break;

		case ActionType.MINUS_ORDER:
			let order = state.totalOrder;
			return {
				...state,
				totalOrder: order > 0 ? state.totalOrder - 1 : order,
			};
			break;

		default:
			break;
	}
	return state;
};

export default rootReducer;
