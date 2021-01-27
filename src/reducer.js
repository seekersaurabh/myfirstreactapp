const initialState = { todos: [], activeButton: 'ALL' }

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case 'todos/todoAdded': {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.payload,
                        active: false,
                    },
                ],
            }
        }
        case 'todos/toggleTodo': {
            return {
                // Again copy the entire state object
                ...state,
                // This time, we need to make a copy of the old todos array
                todos: state.todos.map((todo, i) => {
                    // If this isn't the todo item we're looking for, leave it alone
                    if (i !== action.payload) {
                        return todo
                    }

                    // We've found the todo that has to change. Return a copy:
                    return {
                        ...todo,
                        // Flip the completed flag
                        active: !todo.active,
                    }
                }),
            }
        }
        case 'todos/removeTodo': {
            let todosCopy = state.todos.slice(0)
            todosCopy.splice(action.payload, 1)
            return {
                // Again copy the entire state object
                ...state,
                // This time, we need to make a copy of the old todos array
                todos: todosCopy,
            }
        }
        case 'todos/changeActiveButton': {
            return {
                ...state,
                activeButton: action.payload,
            }
        }
        case 'todos/removeCompletedTodo': {
            return {
                // Again copy the entire state object
                ...state,
                // This time, we need to make a copy of the old todos array
                todos: state.todos.filter((todo) => todo.active !== true),
            }
        }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}
