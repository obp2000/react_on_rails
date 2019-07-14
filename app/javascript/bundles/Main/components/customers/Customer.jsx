import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'
import DeleteCustomerButton from './Containers/DeleteCustomerButton'

const Customer = ({
    id,
    nick,
    name,
    created_at,
    updated_at,
}) => <tr>
    <td>{id}</td>
    <td>{nick}</td>
    <td>{name}</td>
    <td>{created_at}</td>
    <td>{updated_at}</td>
    <td>
        <Link to={"/customers/" + id} className="btn btn-outline-primary btn-sm">Редактировать</Link>
    </td>
    <td>
        <DeleteCustomerButton id={id}/>
    </td>
</tr>

Customer.propTypes = {
    id: PropTypes.number,
    nick: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
}

Customer.defaultProps = {
    id: 0,
    nick: '',
    name: '',
    address: '',
    created_at: '',
    updated_at: ''
}

export default Customer