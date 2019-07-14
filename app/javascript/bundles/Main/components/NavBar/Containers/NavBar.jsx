import {connect} from 'react-redux'
import NavBar from '../NavBar'

const mapStateToProps = ({auth: {
        isAuthenticated
    }}) => {
    return {isAuthenticated}
}

export default connect(mapStateToProps)(NavBar)
