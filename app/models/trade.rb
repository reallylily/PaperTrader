# == Schema Information
#
# Table name: trades
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  symbol     :string           not null
#  shares     :integer          not null
#  price      :integer          not null
#  trade_type :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Trade < ApplicationRecord
    validates :user_id, :symbol, :shares, :price, :trade_type, presence: true

    belongs_to :user
end
