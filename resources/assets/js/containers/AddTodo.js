import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import {
	todoform_toggle,
	todos_add,
	todos_update
} from '../actions';

class AddTodo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: '',
			errors: []
		};
	}

	formVisible() {
		return this.props.visibility? 'addTodoWrapper shown': 'addTodoWrapper hidden';
	}

	changeTitle(event) {
		let title = event.target.value;
		let errors = [];

		this.setState({
			title: title
		});


		if(title.length == 0) {
			errors.push('Title is required.');
		} else if(title.length > 50) {
			errors.push('Title must be less than or equal to 50 characters.');
		} else if(!/^[0-9a-zA-Z\s\-\.]+$/.test(title)) {
			errors.push('Title must only be English alphabets.');
		}

		this.setState({
			errors: errors
		});
	}

	changeDescription(event) {
		let description = event.target.value
		let errors = [];

		this.setState({
			description: description
		});

		if(description.length == 0) {
			errors.push('Description is required.');
		} else if(description.length > 200) {
			errors.push('Description must be less than or equal to 200 characters.');
		} else if(!/^[0-9a-zA-Z\s\-\.]+$/.test(description)) {
			errors.push('Description must only be English alphabets.');
		}

		this.setState({
			errors: errors
		});
	}

	save() {
		this.setState({
			errors: []
		});

		let errors = [];

		if(this.state.title.length == 0) {
			errors.push('Title is required.');
		} else if(this.state.title.length > 50) {
			errors.push('Title must be less than or equal to 50 characters.');
		} else if(!/[0-9a-zA-Z\s\-]/.test(this.state.title)) {
			errors.push('Title must only be English alphabets.');
		}

		if(this.state.description.length == 0) {
			errors.push('Description is required.');
		} else if(this.state.description.length > 200) {
			errors.push('Description must be less than or equal to 200 characters.');
		} else if(!/[0-9a-zA-Z\s\.\,\-]/.test(this.state.description)) {
			errors.push('Description must only be English alphabets.');
		}

		this.props.todos.map(todo => {
			if(todo.title == this.state.title) {
				errors.push('That todo title already exists.');
			}
		});

		if(errors.length != 0) {
			this.setState({
				errors: errors
			});

			return;
		}

		this.hideForm();

		this.props.todos_add({
			title: this.state.title,
			description: this.state.description
		});
	}

	resetState() {
		this.setState({
			title: '',
			description: '',
			errors: []
		});
	}

	hideForm() {
		this.props.todoform_toggle(!this.props.visibility);
		this.resetState();
	}

	render() {
		let showError = this.state.errors.map((error, i) => <li className="errors" key={'error_' + i}>{error}</li>);

		return (
			<div className={this.formVisible()}>
				<ul>
					<li><p>Add Todo</p></li>
					<li><input type="text" placeholder="Todo (required)" value={this.state.title} onChange={this.changeTitle.bind(this)}/></li>
					<li><textarea placeholder="Description (required)" value={this.state.description} onChange={this.changeDescription.bind(this)}></textarea></li>
					<li><input onClick={this.save.bind(this)} className="btn-blue" type="button" value="Save"/> | <input onClick={this.hideForm.bind(this)} className="btn-red" type="button" value="Cancel"/></li>
					{showError}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		visibility: store.topbar.AddTodoFormVisible,
		todos: store.todos
	}
}

function mapDispatchToProps(dispatch) {
	return {
		todoform_toggle: (visible) => {
			dispatch(todoform_toggle(visible));
		},

		todos_add: (todo) => {
			dispatch(todos_add(todo));

			axios.post('todos', {
				...todo,
				_token: window.__CSRF__
			})
			.then(data => {
				dispatch(todos_update(data.data));
			});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);