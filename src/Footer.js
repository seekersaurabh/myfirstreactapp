import React from 'react'
import { connect } from 'react-redux'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <label>{this.props.todosLength} items left</label>
                <button onClick={this.props.changeActiveButton('ALL')}>
                    All
                </button>
                <button onClick={this.props.changeActiveButton('ACTIVE')}>
                    Active
                </button>
                <button onClick={this.props.changeActiveButton('COMPLETED')}>
                    Completed
                </button>
                <button onClick={this.props.removeCompletedTodos}>
                    Clear Completed
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todosLength: state.todos.length,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeActiveButton: (activeButton) => () =>
            dispatch({
                type: 'todos/changeActiveButton',
                payload: activeButton,
            }),
        removeCompletedTodos: () =>
            dispatch({ type: 'todos/removeCompletedTodo' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)
