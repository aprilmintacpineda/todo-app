import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { todoform_toggle } from '../actions';

class Topbar extends Component {
	render() {
		return (
			<div className="topbar-wrapper">
				<div className="topbar">
					<div className="left">
						<p>Todo App</p>
					</div>

					<div className="right">
						<a onClick={() => {
							this.props.toggleAddTodoForm(!this.props.AddTodoFormVisible)
						}}>Add New</a>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		AddTodoFormVisible: store.topbar.AddTodoFormVisible
	}
}

function mapDispatchToProps(dispatch) {
	return {
		toggleAddTodoForm: (visible) => {
			dispatch(todoform_toggle(visible));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);