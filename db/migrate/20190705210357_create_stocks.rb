class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :symbol, null: false
      t.string :exchange
      t.string :name
      t.string :type
      t.string :iexId
      t.string :region
      t.string :currency
      t.timestamps
    end
    add_index :stocks, :symbol, unique: true
    add_index :stocks, :iexId
  end
end
