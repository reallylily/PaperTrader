class CreateWatchlists < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlists do |t|
      t.integer :user_id, null: false
      t.string :symbol, null: false
      t.timestamps
    end
    add_index :pairs, [:user_id, :question_id], unique: true
  end
end
