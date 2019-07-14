object @product

attributes :id, :name, :price, :weight, :width, :density, 
           :dollar_price, :dollar_rate, :width_shop, :density_shop, :weight_for_count,
           :length_for_count, :price_pre, :image, :image_url

node :updated_at do |product|
    I18n.l(product.updated_at, format: :short)
end

node :created_at do |product|
    I18n.l(product.created_at, format: :short)
end