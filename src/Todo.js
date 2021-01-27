import React from 'react'
import { connect } from 'react-redux'

class Todo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            getTodo,
            activeButton,
            toggleTodo,
            removeTodo,
            index,
        } = this.props
        const todo = getTodo(index)
        if (
            activeButton === 'ALL' ||
            (activeButton === 'ACTIVE' && todo.active === false) ||
            (activeButton === 'COMPLETED' && todo.active === true)
        ) {
            return (
                <li>
                    <input
                        type="checkbox"
                        checked={todo.active}
                        onChange={toggleTodo(index)}
                    />
                    {todo.text}
                    <button onClick={removeTodo(index)}>X</button>
                </li>
            )
        }

        return null
    }
}

const mapStateToProps = (state) => {
    return {
        getTodo: (index) => state.todos[index],
        activeButton: state.activeButton,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (index) => () =>
            dispatch({ type: 'todos/toggleTodo', payload: index }),
        removeTodo: (index) => () =>
            dispatch({ type: 'todos/removeTodo', payload: index }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo)
