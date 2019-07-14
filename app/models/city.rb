class City < ActiveRecord::Base

    self.primary_key = 'pindex'

    has_many :customers, foreign_key: 'pindex'

    scope :city_like, ->(term) { where('city LIKE ? OR pindex LIKE ?', term + '%', term + '%') }
 
    def self.autocomplete(term)
      city_like(term).order(:city)
    end

end