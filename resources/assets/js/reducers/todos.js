import axios from 'axios';

let initialState = window.__PRELOADED_STORE__.todoList;

export default function todos(state = initialState, action) {
	switch(action.type) {
		case 'TODOS_ADD':
			return [
				...state,
				action.payload
			];
		break;

		case 'TODOS_UPDATE':
			state.map((todo, i) => todo.title == action.payload.title? state.splice(i, 1): todo);

			return [
				...state,
				action.payload
			];
		break;

		case 'TODOS_DELETE':
			state.map((todo, i)=> todo.id == action.payload? state.splice(i, 1): todo);

			axios.delete('todos/' + action.payload, {
				_token: window.__CSRF__,
				id: action.payload
			});

			return [
				...state
			]
		break;
	}

	return state;
}