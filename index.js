import { createStore } from 'redux'

const initState = 7

function zoomLevel(state = initState, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  case 'SET':
    return action.payload
  case 'RESET':
    return initState
  default:
    return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(zoomLevel)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 8
store.dispatch({ type: 'INCREMENT' })
// 9
store.dispatch({ type: 'DECREMENT' })
// 8
store.dispatch({ type: 'SET', payload: 3 })
// 3
store.dispatch({ type: 'RESET' })
// 7
