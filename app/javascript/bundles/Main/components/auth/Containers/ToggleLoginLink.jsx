import {connect} from 'react-redux'
import {toggleLogin} from '../../redux/AuthDialog'
import ToggleLoginLink from '../ToggleLoginLink'

const mapStateToProps = ({authDialog: {
        login
    }}) => {
    return {login}
}

export default connect(mapStateToProps, {toggleLogin})(ToggleLoginLink)