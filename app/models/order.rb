class Order < ActiveRecord::Base
  belongs_to :customer
  has_many :order_items

  attr_accessor :sum

  def sum
    order_items.sum('order_items.amount*order_items.price')
  end
  
  accepts_nested_attributes_for :order_items, allow_destroy: true
  
  PERMITTED_ATTRIBUTES = [:id, :customer_id, :post_cost, :packet, :delivery_type, :address, :gift,
                          {order_items_attributes: OrderItem::PERMITTED_ATTRIBUTES}]
    
#  def order_items=(val)
#    self.order_items = val
#  end
  scope :with_customer, ->{
    select("orders.*").select("customers.nick customer_nick").joins(:customer)
  }

  scope :with_customer_and_totals, -> {
    select('orders.*, order_items_totals.sum, order_items_totals.count')
    .joins(:customer)
    .joins('LEFT OUTER JOIN (' + OrderItem.totals.to_sql + 
           ') order_items_totals ON orders.id = order_items_totals.order_id')
    .order('orders.created_at DESC')
  }

  enum delivery_type: ['Почта России', 'Деловые линии', 'ПЭК', 'Кит', 'Энергия', 'ЖелДорЭкспедиция',
    'Ратэк', 'Байкал Сервис', 'СДЭК Посылочка']

end
