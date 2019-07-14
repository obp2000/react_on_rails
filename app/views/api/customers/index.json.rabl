node :totalCount do
  @customers.total_count
end

node :totalPages do
  @total_pages
end

child @customers => :customers do
  collection @customers

  attributes :id, :nick, :name
  node :updated_at do |customer|
    I18n.l(customer.updated_at, format: :short)
  end

  node :created_at do |customer|
    I18n.l(customer.created_at, format: :short)
  end
  
end
