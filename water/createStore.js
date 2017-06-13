import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { get, negate, overSome } from 'lodash/fp'

import active from './active/reducer'

import { checkSkinny } from './active/actions'
import screenSize from './screen/reducer'

// Util functions to select state from props.
const getAdminLogin = get('splashPage.adminLoggedIn')
const getSplashMatch = get('splashPage.validMatchFound')
const getVisibleDefault = negate(overSome([getAdminLogin, getSplashMatch]))

// Before react is init decide what state it should start with.
const initState = {
  active: {
    isActive: getVisibleDefault(props),
  },
  screenSize: {
    isMobile: checkSkinny(),
  },
}

const reducers = combineReducers({
  active,
  screenSize,
})

export default createStore(reducers, applyMiddleware(thunk))
