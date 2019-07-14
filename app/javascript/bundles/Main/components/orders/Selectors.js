import { createSelector } from 'reselect'
import {formValueSelector} from 'redux-form'

const OrderItemsSelector = state => formValueSelector('order')(state, 'order_items')
const order_items_sum = (order_items = []) => {
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

export const OrderItemsSumSelector = createSelector(
    OrderItemsSelector,
    order_items_sum
)

const PostCostSelector = state => formValueSelector('order')(state, 'post_cost')
const PacketSelector = state => formValueSelector('order')(state, 'packet')

export const PostCostWithPacketSelector = createSelector(
    PostCostSelector,
    PacketSelector,
    (post_cost, packet) => post_cost + packet
)
