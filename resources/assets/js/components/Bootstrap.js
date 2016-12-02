import React, { Component } from 'react';

import TodoList from '../containers/TodoList';
import AddTodo from '../containers/AddTodo';
import Topbar from '../containers/Topbar';

export default class Bootstrap extends Component {
	render() {
		return (
			<div>
				<Topbar />
				<TodoList />
				<AddTodo />
			</div>
		);
	}
}