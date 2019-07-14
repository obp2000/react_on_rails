import {connect} from 'react-redux'
import {signout} from '../../redux/auth'
import LinkToSignout from '../LinkToSignout'

export default connect(null, {signout})(LinkToSignout)
