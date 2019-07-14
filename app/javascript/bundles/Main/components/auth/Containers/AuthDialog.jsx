import {connect} from 'react-redux'
import AuthDialog from '../AuthDialog'
import {toggleModal} from '../../redux/NavBar'

const mapStateToProps = ({authDialog: {
        login
    }, navBar: {
        modal
    }}) => {
    return {login, modal}
}

export default connect(mapStateToProps, {toggleModal})(AuthDialog)