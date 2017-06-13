import { createStructuredSelector } from 'reselect'
import { toggleActive } from './active/actions'
import Thingy from './ThingyEl'

const getProps = createStructuredSelector({ isActive })
const getActions = { toggleActive }
export default connect(getProps, getActions)(Thingy)
