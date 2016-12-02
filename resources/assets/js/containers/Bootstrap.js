import React, { Component } from 'react';

import TodoList from '../components/TodoList';
import AddTodo from './AddTodo';
import Topbar from './Topbar';

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