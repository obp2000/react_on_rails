import PropTypes from 'prop-types'
import React from 'react'
import {Badge} from 'reactstrap'

const OrderNumber = ({id, created_at, isFetching}) => {
    return !isFetching && <Badge color="primary">№ {id
            .toString()
            .replace(/new/gi, ' Новый')} от {created_at}</Badge>
}

OrderNumber.propTypes = {
    id: PropTypes.number,
    created_at: PropTypes.string,
    isFetching: PropTypes.bool
}

OrderNumber.defaultProps = {
    id: 'new',
    created_at: ''
}

export default OrderNumber