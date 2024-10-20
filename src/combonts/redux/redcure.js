export const reducer = (state = { counter: 0 }, action) => {
    if (action.type === 'IN') {
        return { counter: state.counter + 1 }
    }
    if (action.type === 'DE') {
        return { counter: state.counter - 1 }
    }
    if (action.type === 'RE') {
        return { counter: 0 }
    }
}