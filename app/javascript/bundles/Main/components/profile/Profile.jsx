import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import RenderProfile from './RenderProfile'

const Profile = connect(({auth}) => auth)(RenderProfile)

const {number, string, func, bool, object} = PropTypes

Profile.propTypes = {
    // auth: object
}

export default Profile
