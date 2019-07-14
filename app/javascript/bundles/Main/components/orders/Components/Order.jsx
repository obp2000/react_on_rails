import PropTypes from 'prop-types'
import React from 'react'
import Container from '../Containers/NewOrder'

export default class Order extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this
            .props
            .fetchOrder()
    }
    render() {
        return <Container/>
    }
    static propTypes = {
        fetchOrder: PropTypes.func.isRequired
    }
}

