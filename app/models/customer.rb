class Customer < ActiveRecord::Base
  has_many :orders
  belongs_to :city, foreign_key: 'pindex', optional: true
  
  PERMITTED_ATTRIBUTES = %w(nick name pindex address)

  scope :nick_like, ->(term) { where('nick LIKE ?', '%' + term + '%') }
 
  def self.autocomplete(term)
    nick_like(term).order(:nick)
  end
end
