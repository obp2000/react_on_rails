import PropTypes from 'prop-types'
import React from 'react'

const DeleteButton = ({handleDelete}) => <button onClick={handleDelete} className="btn btn-outline-primary btn-sm">Удалить</button>

DeleteButton.propTypes = {
    handleDelete: PropTypes.func.isRequired
}

export default DeleteButton