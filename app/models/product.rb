# == Schema Information
#
# Table name: products
#
#  id         :integer          not null, primary key
#  name       :string(100)      not null
#  price      :integer          default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Product < ActiveRecord::Base
  PER_PAGE = 10

  attr_accessor :image_url
  
  has_many :order_items
  
  mount_uploader :image, ImageUploader
  
  scope :name_like, ->(term) { where('name LIKE ?', '%' + term + '%') }
  
  def image_url
    image.presence && ('http://localhost:3000' + image.url)
  end
  
  def self.autocomplete(term)
    name_like(term).order(:name)
  end
  
  PERMITTED_ATTRIBUTES = ['name', 'price', 'weight', 'width', 'density', 'dollar_price', 'dollar_rate', 
                          'width_shop', 'density_shop', 'weight_for_count', 'length_for_count',
                          'price_pre', 'image']
end
