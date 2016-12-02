import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
	todo_delete
} from '../actions';

class TodoList extends Component {
	constructor(props) {
		super(props);
	}

	deleteTodo(id) {
		this.props.deleteTodo(id);
	}

	render() {
		let todolist = this.props.todos.map((todo, i) => {
			return (
				<div className="todo" key={'todo_' + i}>
					<div className="todo-title">{todo.title}</div>
					<div className="todo-description">{todo.description}</div>
					<div className="todo-actions"><a onClick={this.deleteTodo.bind(this, todo.id)}>Delete</a> | <a>Edit</a></div>
				</div>
			);
		});

		return (
			<div className="wrapper">
				{todolist}
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		todos: store.todos
	}
}

function mapDispatchToProps(dispatch) {
	return {
		deleteTodo: (id) => {
			dispatch(todo_delete(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);