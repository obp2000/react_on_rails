import React from 'react'
import PropTypes from 'prop-types'

const GetPostCostButton = ({getPostCost}) => <button
    onClick={getPostCost}
    type="button"
    className="btn btn-outline-primary btn-sm">Рассчитать</button>

GetPostCostButton.propTypes = {
    getPostCost: PropTypes.func.isRequired
}

export default GetPostCostButton