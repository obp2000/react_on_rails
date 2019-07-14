export const Packets = [25, 27, 42, 72, 85]
export const PacketWeight = 50
export const SamplesWeight = 50
export const GiftWeight = 100

export const order_items_sum = (order_items = []) => {
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