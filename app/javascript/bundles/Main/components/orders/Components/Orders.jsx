import PropTypes from 'prop-types'
import React from 'react'
import Container from '../Containers/Orders'

export default class Orders extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this
            .props
            .fetchOrders()
    }
    componentDidUpdate() {
        this
            .props
            .fetchOrders()
    }
    render() {
        return <Container/>
    }

    static propTypes = {
        fetchOrders: PropTypes.func.isRequired
    }
}
