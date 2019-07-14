class OrderItem < ActiveRecord::Base
  belongs_to :order, touch: true
  belongs_to :product

  scope :totals, ->{
    select('order_items.order_id, sum(order_items.amount*order_items.price), count(order_items.id)')
    .group('order_id')
    .reorder(:order_id)
  }
  
  PERMITTED_ATTRIBUTES = %w(id order_id product_id amount price created_at updated_at _destroy)
end
