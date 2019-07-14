import {connect} from 'react-redux'
import {toggleModal} from '../../redux/NavBar'
import ToggleModalLink from '../ToggleModalLink'

export default connect(null, {toggleModal})(ToggleModalLink)
