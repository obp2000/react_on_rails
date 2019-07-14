object @order

attributes :id, :sum, :post_cost, :packet, :delivery_type, :address, :gift

node :delivery_types do |order|
  Order.delivery_types.keys
end

node :updated_at do |order|
  I18n.l(order.updated_at, format: :short)
end

node :created_at do |order|
  I18n.l(order.created_at, format: :short)
end

child @customer => :customer do
  object @customer

  attributes :id, :nick, :name, :pindex, :address

  node :city do |customer|
    customer.city.try(:city)
  end
end

child @order_items => :order_items do
  collection @order_items

  attributes :id, :order_id, :amount, :price, :created_at, :updated_at, 
             :product_name, :product_density, :product_width, :product_price, :_destroy

  child :product do 
    node :id { |product| product.id }
    node :name { |product| product.name }
    node :density { |product| product.density }
    node :width { |product| product.width }
    node :price { |product| product.price }
  end
end

