import {connect} from 'react-redux'
import OrderPostal from '../OrderPostal'

import {formValueSelector} from 'redux-form'
import {PacketWeight, SamplesWeight, GiftWeight, order_items_sum} from '../OrderConsts'

import {OrderItemsSumSelector, PostCostWithPacketSelector} from '../Selectors'

const mapStateToProps = (state) => {
    // const {
    //     order_items = [],
    //     post_cost = 0,
    //     packet = 0
    // } = formValueSelector('order')(state, 'order_items', 'post_cost', 'packet')
    // const {cost, weight} = order_items_sum(order_items)
    const {cost, weight} = OrderItemsSumSelector(state)
    const post_cost_with_packet = PostCostWithPacketSelector(state)
    // post_cost + packet
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
            post_cost_with_packet,
            post_discount,
            post_cost_with_packet_and_post_discount,
            cost_with_postal_and_post_discount,
            needGift,
            tolalWeight
    }
}

export default connect(mapStateToProps)(OrderPostal)