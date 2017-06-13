// REDUX ACTIONS
export const IS_MOBILE = 'screen/MOBILE'
export function setIsMobile() {
  return { type: IS_MOBILE }
}

export const NOT_MOBILE = 'screen/NOT_MOBILE'
export function setNotMobile() {
  return { type: NOT_MOBILE }
}

// HELPER / UTILS

// Decide what action to dispatch.
export function getMobileAction(isMobile) {
  return isMobile ? setIsMobile() : setNotMobile()
}

// Get window width.
// NOTE GLOBAL window
function getWindowWidth() {
  return Math.max(window.document.documentElement.clientWidth, window.innerWidth || 0)
}
// true when sent a number under 960.
const skinnyWindow = gte(960)
const checkSkinny = flow(getWindowWidth, skinnyWindow)

export function getWindowAction() {
  return (dispatch, getState) => {
    const oldIsMobile = getIsMobile(getState())
    const newIsMobile = checkSkinny()
    if (newIsMobile !== oldIsMobile) return dispatch(getMobileAction(newIsMobile))
  }
}
