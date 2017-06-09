import { createStore } from 'redux'
import { add, constant, nthArg } from 'lodash/fp'

const initState = 7

const reducers = {
  ['INCREMENT']: add(1),
  ['INCREASE_BY']: add,
  ['DECREMENT']: add(-1),
  ['SET']: nthArg(1),
  ['RESET']: constant(initState),
}
function zoomLevel(state = initState, { payload, type }) {
  return (reducers[type] && reducers[type](state, payload)) || state
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
store.dispatch({ type: 'INCREASE_BY', payload: 3 })
// 10
