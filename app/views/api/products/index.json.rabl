node :totalCount do
  @products.total_count
end

node :totalPages do
  @total_pages
end

# node :per_page do
#   Product::PER_PAGE
# end

child @products => :products do
  collection @products

  attributes :id, :name, :price, :weight, :width, :density, 
         :dollar_price, :dollar_rate, :image
         
  node :updated_at do |product|
    I18n.l(product.updated_at, format: :short)
  end
      
  node :created_at do |product|
    I18n.l(product.created_at, format: :short)
  end         
end
