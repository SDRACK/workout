# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Exercise.destroy_all

Exercise.create(
  [
    { name: "Squats", description: "", bodypart: 0, reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Lunges", description: "", bodypart: 0, reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Sit ups", description: "", bodypart: 1, reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Plank", description: "", bodypart: 1, reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Press up", description: "", bodypart: 2, reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Narrow grip pressup", description: "", bodypart: 2, reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Chin ups", description: "", bodypart: 3, reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Back raises", description: "", bodypart: 3, reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Punches", description: "", bodypart: 4, reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Shoulder press up", description: "", bodypart: 4, reps_by_level: {1 => 10, 2 => 20, 3 => 30} }
  ]
)

Exercise.find_by_name("Chin ups").requires_bar = true
