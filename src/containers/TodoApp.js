import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import Header from '../components/Header';
// import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';

class TodoApp extends Component {
  handleClick = () => {
    this.props.actions.addTodo("aaa")
    console.log(this.props.states)
    console.log(this.props.todos)
  }

  render(){
    const {todos, actions} = this.props;
    return(
      <div>
        <button onClick={this.handleClick}>click me</button>
        <ul className="list-group list-group-flush">
          {todos.map(el => (
            <li className="list-group-item" key={el.id}>
              {el.text}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {todos: state.todosReducers, states: state.thangReducer, thangs: state}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(TodoActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
