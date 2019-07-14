node :totalCount do
  @orders.total_count
end

node :totalPages do
  @total_pages
end

child @orders => :orders do
  collection @orders

  attributes :id, :customer_id, :sum, :count

  child :customer do 
    node :id { |customer| customer.id }
    node :nick { |customer| customer.nick }
  end

  node :updated_at do |order|
    I18n.l(order.updated_at, format: :short)
  end

  node :created_at do |order|
    I18n.l(order.created_at, format: :short)
  end
  
end