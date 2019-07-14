import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'

const Customer = ({
    customer: {
        id,
        nick,
        name,
        created_at,
        updated_at
    },
    handleDelete
}) => {
    return <tr>
        <td>{id}</td>
        <td>{nick}</td>
        <td>{name}</td>
        <td>{created_at}</td>
        <td>{updated_at}</td>
        <td>
            <Link to={"/customers/" + id} className="btn btn-outline-primary btn-sm">Редактировать</Link>
        </td>
        <td>
            <button onClick={handleDelete.bind(this, id)} className="btn btn-outline-primary btn-sm">Удалить</button>
        </td>
    </tr>
}

const {number, string, func} = PropTypes

Customer.propTypes = {
    id: number,
    nick: string.isRequired,
    name: string.isRequired,
    address: string,
    created_at: string.isRequired,
    updated_at: string.isRequired,
    handleDelete: func
}

Customer.defaultProps = {
    id: 0,
    nick: '',
    name: '',
    created_at: '',
    updated_at: ''
}

export default Customer
