object @customer

attributes :id, :nick, :name, :pindex, :city, :address

node :updated_at do |customer|
    I18n.l(customer.updated_at, format: :short)
end

node :created_at do |customer|
    I18n.l(customer.created_at, format: :short)
end

child @city => :city do
    object @city
  
    attributes :pindex, :city
end