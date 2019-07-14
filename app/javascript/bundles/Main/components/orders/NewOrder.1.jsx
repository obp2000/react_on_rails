import PropTypes from 'prop-types'
import React from 'react'
import {connect} from 'react-redux'
import {reduxForm, formValueSelector} from 'redux-form'
import {push} from 'connected-react-router'
import {PacketWeight, SamplesWeight, GiftWeight} from './OrderConsts'

import {fetchOrderIfNeeded, updateOrder, getPostCost} from '../redux/Orders'
// import {searchProducts} from '../redux/Products'

import OrderForm from './OrderForm'

class NewOrder extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const {fetchOrderIfNeeded, id} = this.props
        fetchOrderIfNeeded(id)
    }
    // handleSubmit = (values) => {
    //     const {updateOrder, id, push} = this.props
    //     updateOrder(id, values)
    //     push('/orders')
    // }
    // onSearchCustomer = (obj, value) => {
    //     if (value) {
    //         this
    //             .props
    //             .searchCustomers(value)
    //     }
    // }
    // onSearchProduct = ({
    //     price
    // }, value, order_item_name) => {
    //     const {change, searchProducts} = this.props
    //     if (price) {
    //         change(`${order_item_name}.price`, price)
    //     } else if (value) {
    //         searchProducts(value)
    //     }
    // }
    // onRemoveOrderItem = (event, order_item_name, fields, index) => {
    //     event.preventDefault()
    //     if (confirm("Удалить?")) {
    //         if (fields.get(index).id) {
    //             this
    //                 .props
    //                 .change(`${order_item_name}._destroy`, true)
    //             // touch(`${order_item_name}._destroy`)
    //         } else {
    //             fields.remove(index)
    //         }
    //     }
    // }
    getPostCost = () => {
        const {postals: {
                tolalWeight
            }, getPostCost} = this.props
        getPostCost(tolalWeight)
    }
    get orderNumber() {
        const {id, created_at} = this.props
        return id.replace(/new/gi, ' Новый') + ' от ' + created_at
    }
    render() {
        return <OrderForm
            {...this.props}
            // handleSubmit={this
            // .props
            // .handleSubmit(this.handleSubmit)}
            // onSearchCustomer={this.onSearchCustomer}
            // onSearchProduct={this.onSearchProduct}
            // onRemoveOrderItem={this.onRemoveOrderItem}
            getPostCost={this.getPostCost}
            orderNumber={this.orderNumber}/>
    }
}

const validate = ({customer}) => {
    const errors = {}
    const blankErrorText = 'Не может быть пустым!'
    if (!customer) {
        errors.customer = blankErrorText
    }
    return errors
}

const onSubmit = (values, dispatch, props) => {
    dispatch(updateOrder(values))
}

const onSubmitSuccess = (result, dispatch, props) => {
    dispatch(push('/orders'))
}

NewOrder = reduxForm({form: 'order', validate, onSubmit, onSubmitSuccess})(NewOrder)

function order_items_sum(order_items = []) {
    return order_items.reduce((sum, order_item) => {
        if (order_item._destroy) 
            return sum
        const {
            amount = 0,
            price = 0,
            product: {
                density: product_density = 0,
                width: product_width = 0
            } = {}
        } = order_item
        return {
            count: sum.count + 1,
            amount: sum.amount + 1 *amount,
            cost: sum.cost + amount * price,
            weight: sum.weight + amount * product_density * product_width / 100
        }
    }, {
        count: 0,
        amount: 0,
        cost: 0,
        weight: 0
    })
}

function mapStateToProps(state, {
    match: {
        params: {
            id
        }
    }
}) {
    const {
        orders: {
            order: {
                created_at
            },
            order
        }
        // products: {
        //     search_products
        // }
    } = state
    const {
        customer: {
            pindex,
            city,
            address
        } = {},
        order_items = [],
        post_cost = 0,
        packet = 0
    } = formValueSelector('order')(state, 'customer', 'order_items', 'post_cost', 'packet')
    const {count, amount, cost, weight} = order_items_sum(order_items)
    const post_cost_with_packet = parseInt(post_cost) + parseInt(packet)
    const needPostDiscount = cost >= 1000
    const post_discount = needPostDiscount
        ? (post_cost_with_packet * 0.3)
        : 0
    const post_cost_with_packet_and_post_discount = post_cost_with_packet - post_discount
    const cost_with_postal_and_post_discount = cost + post_cost_with_packet_and_post_discount
    const needGift = cost >= 2000
    const tolalWeight = weight + PacketWeight + SamplesWeight + (needGift
        ? GiftWeight
        : 0)
    return {
        initialValues: order,
        id,
        created_at,
        // search_products,
        pindex,
        city,
        address,
        order_items_sum: {
            count,
            amount,
            cost,
            weight
        },
        postals: {
            post_cost_with_packet,
            post_discount,
            post_cost_with_packet_and_post_discount,
            cost_with_postal_and_post_discount,
            needGift,
            tolalWeight
        }
    }
}

const {
    number,
    string,
    bool,
    array,
    func,
    shape,
    object
} = PropTypes

NewOrder.propTypes = {
    initialValues: object,
    id: string.isRequired,
    created_at: string,
    // search_products: array,
    pindex: string,
    city: string,
    address: string,
    order_items_sum: shape({count: number, amount: number, cost: number, weight: number}),
    // order_number: string,
    postals: shape({post_cost_with_packet: number, post_discount: number, post_cost_with_packet_and_post_discount: number, cost_with_postal_and_post_discount: number, needGift: bool, tolalWeight: number}),
    fetchOrderIfNeeded: func,
    updateOrder: func,
    getPostCost: func,
    // searchCustomers: func,
    // searchProducts: func,
    push: func
}

NewOrder.defaultProps = {
    created_at: '',
    // search_products: [],
    pindex: '',
    city: '',
    address: '',
    delivery_types: [],
    order_items_sum: {
        count: 0,
        amount: 0,
        cost: 0,
        weight: 0
    },
    postals: {
        post_cost_with_packet: 0,
        post_discount: 0,
        post_cost_with_packet_and_post_discount: 0,
        cost_with_postal_and_post_discount: 0,
        needGift: false
    }
}

export default connect(mapStateToProps, {
    fetchOrderIfNeeded,
    // updateOrder,
    // searchCustomers,
    // searchProducts,
    getPostCost,
    // push
})(NewOrder)
