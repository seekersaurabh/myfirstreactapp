import React from 'react'
import Todo from './Todo'
import Footer from './Footer'
import Header from './Header'
import { connect } from 'react-redux'

class Board extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                    <ul>
                        {this.props.todos.map((todo, i) => {
                            return <Todo key={i} index={i}></Todo>
                        })}
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Board)
