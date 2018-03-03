class CreateExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.text :description
      t.integer :bodypart
      t.integer :level
      t.integer :flags, null: false, default: 0
      t.text :reps_by_level
    end
    add_index :exercises, :bodypart
    add_index :exercises, :level
    add_index :exercises, :flags
  end
end
