class CreateTrades < ActiveRecord::Migration[5.2]
  def change
    create_table :trades do |t|
      t.integer :user_id, null: false
      t.string :symbol, null: false
      t.integer :shares, null: false
      t.integer :price, null: false
      t.string :trade_type, null: false
      t.timestamps
    end
  end
end
