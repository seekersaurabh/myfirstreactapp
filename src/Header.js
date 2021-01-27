import React from 'react'
import { connect } from 'react-redux'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.addTodo = this.addTodo.bind(this)
    }
    addTodo(e) {
        if (e.key === 'Enter') {
            this.props.addTodo(e.target.value)
            e.target.value = ''
        }
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    onKeyDown={this.addTodo}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        innerState: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch({ type: 'todos/todoAdded', payload: todo }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
