let initialState = {
	AddTodoFormVisible: false
}

export default function topbar (state = initialState, action) {
	switch(action.type) {
		case 'ADDTODOFORM_TOGGLE':
			return {
				...state,
				AddTodoFormVisible: action.payload
			}
		break;
	}

	return state;
}