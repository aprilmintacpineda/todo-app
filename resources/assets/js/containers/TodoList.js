import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Todo from '../components/Todo';

class TodoList extends Component {
	constructor(props) {
		super(props);
	}

	deleteTodo(id) {
		this.props.deleteTodo(id);
	}

	render() {
		let todolist = this.props.todos.map((todo, i) => <Todo key={'todo_' + i} todo={todo}/>);

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

export default connect(mapStateToProps)(TodoList);