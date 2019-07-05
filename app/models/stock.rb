# == Schema Information
#
# Table name: stocks
#
#  id         :bigint           not null, primary key
#  symbol     :string           not null
#  exchange   :string
#  name       :string
#  type       :string
#  iexId      :string
#  region     :string
#  currency   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Stock < ApplicationRecord
    validates :symbol, presence: true, uniqueness: true
end
