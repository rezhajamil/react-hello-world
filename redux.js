const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
	value: 0,
	age: 21,
};

// Reducer
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_AGE":
			return {
				...state,
				age: state.age + 1,
			};
			break;
		case "CHANGE_VALUE":
			return {
				...state,
				value: state.value + action.new,
			};
			break;

		default:
			return state;
			break;
	}
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
	console.log("change", store.getState());
});

//Dispatching Action
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", new: 12 });
console.log(store.getState());
