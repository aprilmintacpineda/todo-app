import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
	todos_delete,
	todos_edit
} from '../actions';

class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mode: 'view',
			title: this.props.todo.title,
			description: this.props.todo.description,
			errors: []
		}
	}

	deleteTodo() {
		this.props.deleteTodo(this.props.todo.id)
	}

	changeMode(mode) {
		this.setState({
			mode: mode
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

		if(errors.length != 0) {
			this.setState({
				errors: errors
			});

			return;
		}

		this.changeMode('view');

		this.props.editTodo({
			...this.props.todo,

			title: this.state.title,
			description: this.state.description
		});
	}

	cancel() {
		this.setState({
			title: this.props.todo.title,
			description: this.props.todo.description
		});

		this.changeMode('view');
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

	render() {
		if(this.state.mode == 'view') {
			return (
				<div className="todo">
					<div className="todo-title">{this.props.todo.title}</div>
					<div className="todo-description">{this.props.todo.description}</div>
					<div className="todo-actions">
						<a onClick={this.deleteTodo.bind(this)}>Delete</a> | <a onClick={this.changeMode.bind(this, 'edit')}>Edit</a>
					</div>
				</div>
			);
		} else {
			let showError = () => {
				if(this.state.errors.length > 0) {
					return (
						<div className="msg-box">
							{this.state.errors.map((error, i) => <p key={i} className="errors">{error}</p>)}
						</div>
					);
				}

				return '';
			}

			return (
				<div className="todo edit">
					{showError()}
					<div className="todo-title"><input type="text" value={this.state.title} placeholder="Title (required)" onChange={this.changeTitle.bind(this)}/></div>
					<div className="todo-description"><textarea placeholder="Description (required)" value={this.state.description} onChange={this.changeDescription.bind(this)}></textarea></div>
					<div className="todo-actions">
						<a onClick={this.save.bind(this)}>Save</a> | <a onClick={this.cancel.bind(this)}>Cancel</a>
					</div>
				</div>
			);
		}
	}
}

function mapDispatchToProps(dispatch) {
	return {
		deleteTodo: (id) => {
			dispatch(todos_delete(id));
		},

		editTodo: (updated_todo) => {
			dispatch(todos_edit(updated_todo));
		}
	}
}

export default connect(null, mapDispatchToProps)(Todo);