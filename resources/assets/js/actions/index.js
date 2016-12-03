export function todoform_toggle(visible) {
	return {
		type: 'ADDTODOFORM_TOGGLE',
		payload: visible
	}
}

export function todos_add(todo) {
	return {
		type: 'TODOS_ADD',
		payload: todo
	}
}

export function todos_update(todo) {
	return {
		type: 'TODOS_UPDATE',
		payload: todo
	}
}

export function todos_delete(id) {
	return {
		type: 'TODOS_DELETE',
		payload: id
	}
}

export function todos_edit(id) {
	return {
		type: 'TODOS_EDIT',
		payload: id
	}
}