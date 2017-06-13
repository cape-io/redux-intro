export const IS_MOBILE = 'screen/MOBILE'
export function setIsMobile() {
  return { type: IS_MOBILE }
}

export const NOT_MOBILE = 'screen/NOT_MOBILE'
export function setNotMobile() {
  return { type: NOT_MOBILE }
}

export function getMobileAction(isMobile) {
  return isMobile ? setIsMobile() : setNotMobile()
}

function getWindowWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
}
const skinnyWindow = gt(960)
const checkSkinny = flow(getWindowWidth, skinnyWindow)

export function getWindowAction() {
  return (dispatch, getState) => {
    const oldIsMobile = getIsMobile(getState())
    const newIsMobile = checkSkinny()
    if (newIsMobile !== oldIsMobile) return getMobileAction(newIsMobile)
  }
}
