import { TOGGLE } from './actions'

const initState = {
  isActive: true,
}

// Keep track of what is active.
export default function reducer(state = initState, action) {
  switch (action.type) {
  case TOGGLE:
    return { ...state, isActive: true }
  default:
    return state
  }
}
