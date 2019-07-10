# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  symbol     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Watchlist < ApplicationRecord
    validates :user_id, :symbol, presence: true
    validates :symbol, uniqueness: { scope: :user_id }

    belongs_to :user
end
