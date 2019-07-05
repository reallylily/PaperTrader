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

require 'test_helper'

class StockTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
