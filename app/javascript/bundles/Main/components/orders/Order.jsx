import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'
import DeleteOrderButton from './Containers/DeleteOrderButton'

const Order = ({
        id,
        created_at,
        updated_at,
        sum,
        customer: {
            nick
        }
}) => {
    return <tr>
        <th scope="row">{id}</th>
        <td>{nick}</td>
        <td>{parseInt(sum, 0)}</td>
        <td>{created_at}</td>
        <td>{updated_at}</td>
        <td>
            <Link to={"/orders/" + id} className="btn btn-outline-primary btn-sm">Редактировать</Link>
        </td>
        <td>
            <DeleteOrderButton id={id}/>
        </td>
    </tr>
}

Order.propTypes = {
    id: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    sum: PropTypes.string,
    customer: PropTypes.shape({nick: PropTypes.string}),
}

export default Order